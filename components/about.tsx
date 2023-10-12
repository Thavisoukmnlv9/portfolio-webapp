"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Pern is an emerging full-stack web developer with one year of valuable experience. With a strong skill set that includes Tailwind CSS, React.js, Next.js, JavaScript, TypeScript, Django Rest framework, and Python, Pern is well-equipped to tackle a wide range of web development challenges. Their proficiency in front-end technologies like React.js and Tailwind CSS enables them to create captivating and user-friendly interfaces. Meanwhile, their expertise in back-end technologies, including Python and Django Rest framework, allows them to build robust and efficient server-side solutions. Pern's passion for technology and their commitment to continuous learning make them a promising talent in the ever-evolving world of web development.
      </p>
    </motion.section>
  );
}
