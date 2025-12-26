import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMicroscope } from "react-icons/gi";
import { FaRegClipboard } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";



// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import techglossaryImg from "@/public/TechGlossary.png";
import roomie from "@/public/roomie.png";
import graduated from "@/public/graduated_expanded.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
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
    title: "Club President",
    location: "Issaquah, WA",
    description:
      "I was an intern at a tech startup, where I contributed to front-end development and gained practical experience in a collaborative environment.",
    icon: React.createElement(FaUserTie), // using creat element since can't use jsx components in ts file
    date: "Jun 2025 - Sep 2025",
    },
  {
    title: "Software Engineering Intern",
    location: "Issaquah, WA",
    description:
      "I was an intern at a tech startup, where I contributed to front-end development and gained practical experience in a collaborative environment.",
    icon: React.createElement(CgWorkAlt), // using creat element since can't use jsx components in ts file
    date: "Jun 2025 - Sep 2025",
    },
  {
    title: "TA",
    location: "Orlando, FL",
    description:
      "I was a teaching assistant for an introductory programming course, helping students with assignments and clarifying concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I was a full-stack developer at a startup, where I worked on building and maintaining web applications using modern technologies.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Research Assistant",
    location: "Houston, TX",
    description:
      "I was a full-stack developer at a startup, where I worked on building and maintaining web applications using modern technologies.",
    icon: React.createElement(GiMicroscope),
    date: "Jun 2023 - Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "TechGlossary",
    description:
      "A tech term and tool search engine built using Flask and BM25 algorithm for information retrieval.",
    tags: ["Flask", "BM25", "Pandas", "Pyterrier"],
    imageUrl: techglossaryImg,
    projectUrl: "https://github.com/laurakhot/TechGlossary",
  },
  {
    title: "RxPert",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://github.com/laurakhot/TechGlossary",
  },
  {
    title: "!Graduated",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: graduated,
    projectUrl: "https://github.com/laurakhot/TechGlossary",
  },
  {
    title: "Eat Together",
    description:
      "ALorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    projectUrl: "https://github.com/laurakhot/TechGlossary",
  },
  {
    title: "Roomie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Swift", "UIKit", "Firebase", "MessageUI"],
    imageUrl: roomie,
    projectUrl: "https://github.com/laurakhot/Roomie-UIKit",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;