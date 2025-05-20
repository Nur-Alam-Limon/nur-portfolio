"use client"
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi'
import React from 'react'
import Social from '@/components/Social';
import Photo from '@/components/Photo';

export default function Home() {
  return (
    <section className="h-full py-30">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2">
              Hello I'm <br /> <span className="text-accent">Nur Alam Chowdhury</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Results-driven Full-Stack Developer with 3.5+ years of experience in MERN Stack and scalable web applications. Proficient in React.js, Next.js, Nest.js, Node.js, and MongoDB. Strong problem-solving and leadership skills. Open to diverse projects, leveraging expertise to build robust solutions.
            </p>
            <div className="flex flex-col gap-8 w-full">
              <Button variant="outline" size="lg" className="cursor-pointer uppercase flex items-center gap-2 hover:!text-white">
                <span> Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className='mb-8 xl:mb-0 flex justify-center mt-8'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:!text-white hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
