"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building high-performance, responsive websites and apps using modern technologies like React, Next.js, and Node.js.",
    href: "",
  },
  {
    num: "02",
    title: "Shopify App Development",
    description:
      "Custom private and public Shopify apps tailored to automate business workflows and enhance storefront functionality.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using React Native and Expo, focusing on performance, native integration, and smooth user experience.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX & Frontend Design",
    description:
      "Pixel-perfect, accessible frontend interfaces using Figma designs, Tailwind CSS, and reusable component architecture.",
    href: "",
  },
  {
    num: "05",
    title: "API & Backend Development",
    description:
      "Developing scalable REST and GraphQL APIs using Node.js, Express, NestJS, and MongoDB with a focus on performance, security, and clean architecture.",
    href: "",
  },
  {
    num: "06",
    title: "Automation & Integration Solutions",
    description:
      "Streamlining business operations by automating repetitive tasks and integrating third-party APIs, including Shopify, Redis, Firebase, and more.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] py-16"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
