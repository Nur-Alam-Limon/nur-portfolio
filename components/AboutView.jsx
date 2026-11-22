"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, experience, learning, profile, recommendations, skillGroups, yearsPlus } from "@/lib/profile";

const tabs = ["about", "experience", "education", "skills", "learning", "recommendations"];

export default function AboutView() {
  const years = yearsPlus();
  const [tab, setTab] = useState("experience");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const value = window.location.hash.replace("#", "");
    if (tabs.includes(value)) setTab(value);
  }, []);

  const facts = [
    { fieldName: "Name", fieldValue: profile.name },
    { fieldName: "Role", fieldValue: profile.role },
    { fieldName: "Phone", fieldValue: profile.phoneDisplay },
    { fieldName: "Experience", fieldValue: `${years}+ years` },
    { fieldName: "Email", fieldValue: profile.email },
    { fieldName: "Languages", fieldValue: "English, Bangla" },
  ];
  return (
    <div className="min-h-screen mt-10 flex xl:py-0">
      <div className="container mx-auto">
        <Tabs value={tab} onValueChange={setTab} className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Experience</h3>
                <p className="text-white/60 mx-auto xl:mx-0 max-w-[760px]">
                  {years}+ years of production work. Bevy is the center. Freelance projects sat beside it. Jobsyo is a product I co-founded beside it.
                </p>
                <ScrollArea className="min-h-[640px]">
                  <ul className="grid grid-cols-1 gap-[30px] pr-4">
                    {experience.map((item) => (
                      <li
                        key={item.name}
                        className="bg-[#1A2A3F] py-6 px-6 rounded-xl flex flex-col gap-3 border-l-4 border-accent"
                      >
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                          <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
                          <span className="text-white/50">
                            {item.from} – {item.to}
                          </span>
                        </div>
                        <p className="text-white font-medium">{item.position}</p>
                        <p className="text-white/50 text-sm">{item.note}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.stacks.map((stack) => (
                            <span
                              key={stack}
                              className="text-[13px] bg-white/10 text-white/80 px-2 py-1 rounded-md"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                        <ul className="text-white/80 text-left space-y-2 mt-1">
                          {(expanded[item.name] ? item.points : item.points.slice(0, 3)).map((point) => (
                            <li key={point} className="leading-relaxed">
                              — {point}
                            </li>
                          ))}
                        </ul>
                        {item.points.length > 3 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded((current) => ({
                                ...current,
                                [item.name]: !current[item.name],
                              }))
                            }
                            className="text-accent text-sm text-left w-fit hover:underline"
                          >
                            {expanded[item.name] ? "Show less" : `Show ${item.points.length - 3} more`}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Education</h3>
                <ul className="grid grid-cols-1 gap-[30px]">
                  {education.map((item) => (
                    <li
                      key={item.institution}
                      className="bg-[#1A2A3F] py-6 px-8 rounded-xl flex flex-col gap-3 border-l-4 border-accent"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-2">
                        <h3 className="text-xl font-semibold text-accent">{item.institution}</h3>
                        <span className="text-white/50">
                          {item.from} – {item.to}
                        </span>
                      </div>
                      <p className="text-white font-medium">{item.degree}</p>
                      <p className="text-white/70 text-left">{item.details}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">Skills</h3>
                <p className="text-white/60 max-w-[720px]">
                  The commerce stack is what I ship at Bevy. AI, design, and agentic coding are on here because I use them on research, on Sakinah, and in how I build.
                </p>
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-accent mb-3">{group.title}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="bg-[#1A2A3F] border border-white/10 rounded-full px-4 py-2 text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">About</h3>
                <p className="text-white/70 max-w-[760px] mx-auto xl:mx-0">
                  I am a senior software engineer in Dhaka. For {years}+ years I have led production work at Bevy Commerce: an App Store cart app, pricing, a 1.94 million-unit migration, QuickBooks, reporting for Power BI, and the careers portal. I also led a nautical chart catalog as a freelance project, co-founded Jobsyo, and shipped Sakinah on my own. Before the engineering roles I designed for TEDxRUET and for KnotByte. I take a problem through to a number someone can check.
                </p>
                <ul className="grid grid-cols-1 gap-y-5 max-w-[680px] mx-auto xl:mx-0">
                  {facts.map((item) => (
                    <li key={item.fieldName} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="text-white/50 sm:w-36">{item.fieldName}</span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="learning" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Learning</h3>
                <p className="text-white/60 max-w-[720px]">
                  Courses I finished, listed for the skills they added. The work above is still the record that matters.
                </p>
                <ul className="grid grid-cols-1 gap-[24px]">
                  {learning.map((item) => (
                    <li key={item.name} className="bg-[#1A2A3F] py-6 px-8 rounded-xl flex flex-col gap-3 border-l-4 border-accent text-left">
                      <div className="flex flex-col md:flex-row justify-between gap-2">
                        <h3 className="text-xl font-semibold text-accent">{item.name}</h3>
                        <span className="text-white/50">{item.when}</span>
                      </div>
                      <p className="text-white/70">{item.detail}</p>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-accent underline w-fit">
                        {item.href.includes("freecodecamp") ? "Show credential" : "Course page"}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Recommendations</h3>
                <p className="text-white/60 max-w-[720px]">
                  Written on LinkedIn by people who shipped with me or studied with me. Quoted as they wrote them.
                </p>
                <ul className="grid grid-cols-1 gap-[24px]">
                  {recommendations.map((item) => (
                    <li key={item.name} className="bg-[#1A2A3F] py-6 px-8 rounded-xl flex flex-col gap-3 border-l-4 border-accent text-left">
                      <p className="text-white/80 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                      <div>
                        <p className="font-semibold text-accent">{item.name}</p>
                        <p className="text-white/60 text-sm">{item.role}</p>
                        <p className="text-white/40 text-sm">{item.relation} · {item.when}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline w-fit">
                  See them on LinkedIn
                </a>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
