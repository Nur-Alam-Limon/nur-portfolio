"use client";

import { motion } from "framer-motion";
import { BsMedium } from "react-icons/bs";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <section className="flex flex-col items-center justify-center text-white px-4 py-36">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 text-accent text-center pb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Coming Soon...
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Stay tuned for awesome blogs 🚀
        </motion.p>
      </motion.div>

      {/* Medium Link Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-md text-left hover:border-accent transition"
      >
        <Link
          href="https://medium.com/@nuralam201425"
          target="_blank"
          className="flex items-center gap-4"
        >
          <div className="bg-white/10 p-3 rounded-full">
            <BsMedium className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Read My Blogs on Medium</h3>
            <p className="text-white/70 text-sm">
              Explore my articles on programming, projects, and more.
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
