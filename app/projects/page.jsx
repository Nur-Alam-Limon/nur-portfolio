"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [index, setIndex] = useState(1);
  const [hasError, setHasError] = useState(false);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setIndex(currentIndex + 1);
  };

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setProject(data[0]); // Set default project
      })
      .catch(() => setProjects([]));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {project ? (
              <div className="flex flex-col gap-6 h-full">
                {/* Title */}
                <div>
                  <div className="flex gap-8">
                    <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                      0{index}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize mb-1">
                        {project.title}
                      </h2>
                      <p className="text-white/40 text-sm">
                        Created on{" "}
                        {new Date(project.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="text-xl text-accent font-medium">
                  {project.category}
                </div>

                {/* Description */}
                <p className="text-white/70 text-md leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.stack?.length > 0 && (
                  <ul className="flex gap-3 flex-wrap">
                    {project.stack.map((item, index) => (
                      <li
                        key={item._id}
                        className="text-sm px-2 py-1 bg-white/10 text-accent rounded"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-white/20 my-4" />

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  {/* Live Project */}
                  {project.live && (
                    <Link
                      href={
                        project.live.startsWith("http")
                          ? project.live
                          : `https://${project.live}`
                      }
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-2xl group-hover:text-accent transition" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {/* GitHub Frontend */}
                  {project.githubFrontend && (
                    <Link
                      href={
                        project.githubFrontend.startsWith("http")
                          ? project.githubFrontend
                          : `https://${project.githubFrontend}`
                      }
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-2xl group-hover:text-accent transition" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Frontend Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {/* GitHub Backend */}
                  {project.githubBackend && (
                    <Link
                      href={
                        project.githubBackend.startsWith("http")
                          ? project.githubBackend
                          : `https://${project.githubBackend}`
                      }
                      target="_blank"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-2xl group-hover:text-accent transition" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Backend Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-white/60 text-center">
                Loading project info...
              </p>
            )}
          </div>

          {/* Image Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[620px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[550px] relative group flex justify-center items-center rounded-xl overflow-hidden shadow-lg bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl" />

                    {/* Image with zoom effect */}
                    <div className="relative w-full h-full">
                      <Image
                        src={hasError ? "https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid&w=740" : project.image}
                        fill
                        alt={`Project ${index + 1}`}
                        className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        onError={() => setHasError(true)}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
