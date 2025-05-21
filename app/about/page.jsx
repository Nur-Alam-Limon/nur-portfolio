"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaShopify,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRemix, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiAdobeillustrator } from "react-icons/si";

const about = {
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nur Alam Chowdhury",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1764869750",
    },
    {
      fieldName: "Experience",
      fieldValue: "3.5 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "nuralam201425@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
  ],
};

const skills = {
  skillList: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiRemix />,
      name: "Remix",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <FaShopify />,
      name: "Shopify App",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiPostgresql/>,
      name: "PostgreSql",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaGithub />,
      name: "Git",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Illustrator",
    },
  ],
};

export default function About() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => res.json())
      .then((data) => {
        setEducation(data);
      })
      .catch(() => setEducation([]));
  }, []);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => {
        setExperience(data);
      })
      .catch(() => setExperience([]));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-screen mt-20 flex xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Experience</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  Over the past few years, I’ve had the opportunity to work on a
                  variety of exciting projects, helping businesses grow through
                  thoughtful and effective digital solutions. Each experience
                  has helped me grow not just as a developer, but as a
                  problem-solver and team player.
                </p>

                <ScrollArea className="min-h-[600px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.length > 0 ? (
                      experience.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#1A2A3F] py-6 px-6 rounded-xl flex flex-col gap-3 border-l-4 border-accent shadow-md"
                          >
                            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                              <h3 className="text-xl font-semibold text-accent">
                                {item.name}
                              </h3>
                              <span className="text-md text-white/50">
                                {item.from} - {item.to}
                              </span>
                            </div>

                            <p className="text-white font-medium">
                              {item.position}
                            </p>

                            {item.stacks?.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-1">
                                {item.stacks.map((stack, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[13px] bg-white/10 text-white/80 px-2 py-1 rounded-md"
                                  >
                                    {stack}
                                  </span>
                                ))}
                              </div>
                            )}

                            {item.summary && (
                              <p className="text-white/80 text-md leading-relaxed whitespace-pre-line mt-2 text-start">
                                {item.summary}
                              </p>
                            )}
                          </li>
                        );
                      })
                    ) : (
                      <p className="text-white/60">No Experience data found.</p>
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Education</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  My academic journey in engineering has laid the foundation for
                  my problem-solving mindset and passion for technology. It’s
                  where I first discovered my love for building things through
                  code.
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.length > 0 ? (
                      education.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#1A2A3F] py-6 px-8 rounded-xl flex flex-col gap-3 border-l-4 border-accent shadow-md"
                          >
                            <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full">
                              <h3 className="text-xl font-semibold text-accent">
                                {item.institution}
                              </h3>
                              <span className="text-sm text-white/50">
                                {item.from} - {item.to}
                              </span>
                            </div>

                            <p className="text-white font-medium">
                              {item.degree}
                            </p>

                            {item.details && (
                              <p className="text-white/60 text-sm leading-relaxed text-start">
                                {item.details}
                              </p>
                            )}
                          </li>
                        );
                      })
                    ) : (
                      <p className="text-white/60">No education data found.</p>
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">My Skills</h3>
                  <p className="text-white/60 mx-auto xl:mx-0">
                    Over time, I’ve built a strong skill set by working on
                    real-world projects. From writing clean frontend code to
                    managing backend systems, I enjoy learning and applying new
                    tools to solve problems effectively.
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#1A2A3F] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <div className="text-md text-center pt-4">
                              {skill.name}
                            </div>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">About Me</h3>
                <p className="text-white/60 mx-auto xl:mx-0">
                  I'm Nur Alam Chowdhury, a software engineer from Bangladesh
                  who loves building things that make life easier. I'm
                  passionate about technology, creativity, and solving
                  real-world problems through code. Outside of work, I enjoy
                  learning new tools, exploring ideas, and spending time with my
                  family.
                </p>

                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
