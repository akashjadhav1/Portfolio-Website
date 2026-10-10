import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaUsers, FaFolderOpen, FaFire, FaCode } from "react-icons/fa";

const GITHUB_USERNAME = "akashjadhav1";
const API_BASE = "https://api.github.com";
const HEATMAP_DAYS = 91; // 13 weeks x 7 days

// Rate-limited endpoints return 403/429 - fail quietly and keep the card usable
async function safeFetch(url) {
  try {
    const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) {
      return null;
    }
    return await res.json();
  } catch (err) {
    return null;
  }
}

function formatCount(n) {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1)}k`;
  }
  return `${n}`;
}

function toDayKey(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// Build the ordered list of day keys for the heatmap (oldest first)
function buildHeatmapDays(count) {
  const days = [];
  const today = new Date();
  for (let offset = count - 1; offset >= 0; offset -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - offset);
    days.push(toDayKey(date));
  }
  return days;
}

// GitHub returns commit dates as "YYYY-MM-DDTHH:MM:SSZ" - keep the local date part
function dateOnly(timestamp) {
  return timestamp.slice(0, 10);
}

// Current streak: consecutive days with at least one commit ending today/yesterday
function calcCurrentStreak(countsByDay) {
  const cursor = new Date();
  if (!countsByDay.get(toDayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!countsByDay.get(toDayKey(cursor))) {
      return 0;
    }
  }
  let streak = 0;
  while (countsByDay.get(toDayKey(cursor)) > 0) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

// Longest streak within the fetched window
function calcLongestStreak(countsByDay) {
  let best = 0;
  let run = 0;
  countsByDay.forEach((count) => {
    if (count > 0) {
      run += 1;
      if (run > best) {
        best = run;
      }
    } else {
      run = 0;
    }
  });
  return best;
}

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [commitsByDay, setCommitsByDay] = useState([]);
  const [streaks, setStreaks] = useState({ current: 0, longest: 0 });
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadStats() {
      const [user, repos] = await Promise.all([
        safeFetch(`${API_BASE}/users/${GITHUB_USERNAME}`),
        safeFetch(`${API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100`),
      ]);

      if (cancelled) {
        return;
      }
      if (!user || !Array.isArray(repos)) {
        setError(true);
        return;
      }

      // Aggregate stars / forks / open issues across public repos
      let stars = 0;
      let forks = 0;
      let openIssues = 0;
      const languageTotals = new Map();

      repos.forEach((repo) => {
        stars += repo.stargazers_count;
        forks += repo.forks_count;
        openIssues += repo.open_issues_count;
        if (repo.language) {
          const prev = languageTotals.get(repo.language) || 0;
          languageTotals.set(repo.language, prev + (repo.size || 1));
        }
      });

      // Language share, top 6
      const totalSize = Array.from(languageTotals.values()).reduce((a, b) => a + b, 0);
      const topLanguages = Array.from(languageTotals.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([name, size]) => ({
          name,
          percent: totalSize > 0 ? (size / totalSize) * 100 : 0,
        }));

      setStats({
        avatar: user.avatar_url,
        name: user.name || GITHUB_USERNAME,
        repos: user.public_repos,
        followers: user.followers,
        stars,
        forks,
        openIssues,
      });
      setLanguages(topLanguages);

      // Commit activity (last ~90 days) from the most active repos
      const activeRepos = repos
        .slice()
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);
      const activityLists = await Promise.all(
        activeRepos.map((repo) =>
          safeFetch(
            `${API_BASE}/repos/${GITHUB_USERNAME}/${repo.name}/commits?since=${encodeURIComponent(
              new Date(Date.now() - HEATMAP_DAYS * 864e5).toISOString(),
            )}&per_page=100`,
          ),
        ),
      );

      if (cancelled) {
        return;
      }

      const countsByDay = new Map();
      buildHeatmapDays(HEATMAP_DAYS).forEach((key) => countsByDay.set(key, 0));
      activityLists.forEach((commits) => {
        if (!Array.isArray(commits)) {
          return;
        }
        commits.forEach((commit) => {
          const key = dateOnly(commit.commit.author.date);
          if (countsByDay.has(key)) {
            countsByDay.set(key, countsByDay.get(key) + 1);
          }
        });
      });

      setCommitsByDay(Array.from(countsByDay.entries()));
      setStreaks({
        current: calcCurrentStreak(countsByDay),
        longest: calcLongestStreak(countsByDay),
      });
    }

    loadStats();
    return () => {
      cancelled = true;
    };
  }, []);

  const sectionVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const maxCommitsInDay = commitsByDay.reduce((max, entry) => Math.max(max, entry[1]), 1);

  function heatColor(count) {
    if (count === 0) {
      return "bg-slate-700/40 dark:bg-slate-700/30";
    }
    const ratio = count / maxCommitsInDay;
    if (ratio > 0.66) {
      return "bg-green-400";
    }
    if (ratio > 0.33) {
      return "bg-green-500";
    }
    return "bg-green-700";
  }

  const languageBarColors = [
    "bg-yellow-400",
    "bg-purple-500",
    "bg-sky-500",
    "bg-pink-500",
    "bg-fuchsia-700",
    "bg-orange-500",
  ];

  const languageDotColors = [
    "bg-yellow-400",
    "bg-purple-500",
    "bg-sky-500",
    "bg-pink-500",
    "bg-fuchsia-700",
    "bg-orange-500",
  ];

  function roundedPercent(percent) {
    return Math.round(percent * 100) / 100;
  }

  const summaryTiles = [
    { id: 1, label: "Total Stars", value: stats ? formatCount(stats.stars) : "-", icon: <FaStar size={18} /> },
    { id: 2, label: "Total Forks", value: stats ? formatCount(stats.forks) : "-", icon: <FaCodeBranch size={18} /> },
    { id: 3, label: "Followers", value: stats ? formatCount(stats.followers) : "-", icon: <FaUsers size={18} /> },
    { id: 4, label: "Public Repos", value: stats ? formatCount(stats.repos) : "-", icon: <FaFolderOpen size={18} /> },
    { id: 5, label: "Open Issues", value: stats ? formatCount(stats.openIssues) : "-", icon: <FaCode size={18} /> },
  ];

  return (
    <div id="githubstats" className="bg-slate-100 dark:bg-[#0f172a] py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl md:text-5xl inline-block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          GitHub Statistics
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>

      {error && (
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Could not load GitHub data right now (API rate limit). Please check back later.
        </p>
      )}

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
      >
        {/* Card 1: Most Used Languages */}
        <motion.div
          variants={cardVariant}
          className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Most Used Languages</h2>
          <div className="flex h-3 w-full rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700 mb-6">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className={languageBarColors[index % languageBarColors.length]}
                style={{ width: `${lang.percent}%` }}
                title={`${lang.name} ${roundedPercent(lang.percent)}%`}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {languages.map((lang, index) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${languageDotColors[index % languageDotColors.length]}`}
                ></span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {lang.name} {roundedPercent(lang.percent)}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Profile summary */}
        <motion.div
          variants={cardVariant}
          className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {stats ? `${stats.name}'s GitHub Stats` : "GitHub Stats"}
            </h2>
            {stats && (
              <img
                src={stats.avatar}
                alt={stats.name}
                className="w-14 h-14 rounded-full ring-2 ring-purple-400 ring-offset-2 ring-offset-white dark:ring-offset-[#1e293b]"
              />
            )}
          </div>
          <div className="grid grid-cols-1 gap-3">
            {summaryTiles.map((tile) => (
              <div
                key={tile.id}
                className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-slate-800 px-4 py-3"
              >
                <span className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <span className="text-indigo-400">{tile.icon}</span>
                  {tile.label}
                </span>
                <span className="text-slate-900 dark:text-white font-semibold">{tile.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Contributions and streaks */}
        <motion.div
          variants={cardVariant}
          className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col"
        >
          <div className="grid grid-cols-3 gap-2 text-center mb-6">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {commitsByDay.length > 0 ? formatCount(commitsByDay.reduce((sum, entry) => sum + entry[1], 0)) : "-"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Commits (90 days)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400 flex items-center justify-center gap-1">
                <FaFire size={16} />
                {streaks.current}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Current Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{streaks.longest}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Longest Streak</p>
            </div>
          </div>

          {/* Contribution heatmap */}
          <div className="grid grid-flow-col grid-rows-7 gap-1 justify-center mb-4">
            {commitsByDay.map((entry) => (
              <div
                key={entry[0]}
                title={`${entry[0]}: ${entry[1]} commits`}
                className={`w-3 h-3 rounded-sm ${heatColor(entry[1])}`}
              ></div>
            ))}
          </div>
          {commitsByDay.length === 0 && (
            <p className="text-center text-gray-400 text-sm">Loading commit activity...</p>
          )}

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="mt-auto text-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-300"
          >
            View full profile on GitHub →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GitHubStats;
