"use client";

import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import { profile } from "@/lib/profile";

const titles = [
  "Senior Software Engineer",
  "Full-stack product engineer",
  "Commerce and AI systems",
];

export default function HomeHero({ years }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
      <div className="text-center xl:text-left order-2 xl:order-none">
        <p className="text-accent tracking-[0.2em] uppercase text-sm mb-4">
          {profile.location}
        </p>
        <h1 className="text-4xl xl:text-5xl leading-tight">
          Hello, I&apos;m <br />
          <span className="text-accent">{profile.name}</span>
        </h1>
        <div className="h-[48px] mt-4 mb-6 text-2xl font-medium text-white">
          {titles[index]}
        </div>
        <p className="max-w-[680px] mb-9 text-white/70">
          I build and lead production-ready software, from complex backend systems and data pipelines to customer-facing products. Over {years}+ years, I&apos;ve delivered Shopify applications, pricing and commerce systems, large-scale data migrations, and performance improvements at Bevy Commerce. Beyond that, I&apos;ve led contract product development, co-founded an AI-powered job platform, and independently built and shipped Sakinah. I bring a product mindset, strong engineering ownership, and a focus on solving real problems at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start items-center">
          <a href={profile.resume} download className="w-full max-w-[260px] sm:w-auto sm:max-w-none">
            <Button
              variant="outline"
              size="lg"
              className="w-full cursor-pointer uppercase flex items-center justify-center gap-2 hover:!text-white"
            >
              <span>Download resume</span>
              <FiDownload className="text-xl shrink-0" />
            </Button>
          </a>
          <a href="/projects" className="w-full max-w-[260px] sm:w-auto sm:max-w-none">
            <Button size="lg" className="w-full uppercase justify-center">
              See the work
            </Button>
          </a>
        </div>
      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  );
}
