"use client";

import { motion } from "framer-motion";
import { BsMedium } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const getExcerpt = (htmlContent, maxLength = 120) => {
    if (!htmlContent) return "";
    const text = htmlContent.replace(/<[^>]+>/g, ""); 
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section className="flex flex-col items-center justify-center text-white px-4 py-28 max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center w-full flex flex-col justify-center items-center"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 text-accent text-center pb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Blogs
        </motion.h1>

        {loading ? (
          <p className="text-white/70 text-lg md:text-xl mb-8">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-white/70 text-lg md:text-xl mb-8">
            No blogs available right now.
          </p>
        ) : (
          <div className="space-y-6 mb-12 text-left w-full max-w-lg">
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-lg text-left hover:border-accent transition"
              >
                <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
                <p className="text-sm text-muted-foreground mb-2">by {blog.author}</p>
                <p className="text-white/70 text-sm">{getExcerpt(blog.content)}</p>
                {blog.tags.length > 0 && (
                  <p className="text-xs text-gray-400 mt-2">
                    Tags: {blog.tags.join(", ")}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Medium Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-lg text-left hover:border-accent transition"
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
      </motion.div>
    </section>
  );
}
