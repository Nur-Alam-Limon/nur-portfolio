"use client"
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { motion } from 'framer-motion';

const titles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "UI/UX & Graphics Designer"
];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        // Remove characters
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        // Add characters
        setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
      }

      // When typing is complete, wait then delete
      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When deleting is complete, move to next
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100); // speed: deleting is faster

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="h-full py-16">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <h1 className='text-4xl leading-[4rem]'>
              Hello I'm <br /> <span className="text-accent">Nur Alam Chowdhury</span>
            </h1>
            {/* Typewriter Effect */}
            <div className="h-[50px] mt-4 mb-6 text-2xl font-medium text-white min-w-[280px] inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block"
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.span>
            </div>
            <p className="max-w-[600px] mb-9 text-white/70">
              Passionate Full-Stack Developer with 3.5+ years of hands-on experience building scalable and high-performance web applications using the MERN stack. Proficient in modern technologies like React.js, Next.js, Node.js, Nest.js, and MongoDB. Known for clean code, efficient problem-solving, and a strong eye for detail. I thrive in dynamic environments and enjoy turning complex ideas into elegant, functional solutions.
            </p>
            <div className="flex flex-col gap-8 w-full">
              <Button variant="outline" size="lg" className="cursor-pointer uppercase flex items-center gap-2 hover:!text-white">
                <span> Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
