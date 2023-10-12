import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import luadgame from "@/public/luad-game.png";
import rmtdevImg from "@/public/rmtdev.png";
import luckydraw from "@/public/luckydraw.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Pakse",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2018",
  },
  {
    title: "Graduated Bachelor Of Computer Engineering",
    location: "National University of Laos Faculty of Engineering",
    description:"",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ຂາຍຫວຍ",
    description:
      "",
    tags: ['NextJS', "Django Rest-framework", "postgresSQL", "Tailwind", "framework-motion"],
    imageUrl: luadgame,
  },
  {
    title: "ສຸ່ມບິນເລກ",
    description:
      "",
    tags: ["TypeScript",'RefineJS', "Django Rest-framework", "postgresSQL", "Tailwind", "framework-motion"],
    imageUrl: luckydraw,
  },
] as const;

export const skillsData = [
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
