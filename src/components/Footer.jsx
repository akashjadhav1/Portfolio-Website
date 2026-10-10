import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div>
      

<motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-slate-100 dark:bg-[#0f172a] rounded-lg shadow m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
       
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="aj" className="hover:underline">Akash Jadhav™</a>. All Rights Reserved.</span>
    </div>
</motion.footer>


    </div>
  )
}

export default Footer
