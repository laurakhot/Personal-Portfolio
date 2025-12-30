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
import eatTogether from "@/public/big_logo.png";
import leetcare from "@/public/leetcare.png";


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
    name: "Skills",
    hash: "#skills",
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
    company: "Web Impact at UW",
    description:
      "I was an intern at a tech startup, where I contributed to front-end development and gained practical experience in a collaborative environment.",
    icon: React.createElement(FaUserTie), // using creat element since can't use jsx components in ts file
    date: "Jun 2025 - Sep 2025",
    },
  {
    title: "Software Engineering Intern",
    location: "Issaquah, WA",
    company: "Costco IT",
    description:
      "I was an intern at a tech startup, where I contributed to front-end development and gained practical experience in a collaborative environment.",
    icon: React.createElement(CgWorkAlt), // using creat element since can't use jsx components in ts file
    date: "Jun 2025 - Sep 2025",
    },
  {
    title: "Undergraduate Teaching Assistant",
    location: "Seattle, WA",
    company: "Paul G. Allen School of Computer Science & Engineering",
    description:
      "I was a teaching assistant for an introductory programming course, helping students with assignments and clarifying concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Elementary Coding Instructor",
    location: "Seattle, WA",
    company: "Coding with Kids",
    description:
      "I was a full-stack developer at a startup, where I worked on building and maintaining web applications using modern technologies.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Research Assistant",
    location: "Seattle, WA",
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
      "A search engine for technical terms and developer tools built using Flask and BM25 algorithm for information retrieval.",
    tags: ["Flask", "BM25", "Pandas", "Pyterrier"],
    imageUrl: techglossaryImg,
    projectUrl: "https://github.com/laurakhot/TechGlossary",
  },
  {
    title: "LeetCare",
    description:
      "A Pharmacy patient stimulator with AI-driven text and voice capabilites and instantaneous feedback aligned with UW School of Pharmacy standards.",
    tags: [ "Next.js", "MongoDB", "Prisma", "ElevenLabs", "OpenAI"],
    imageUrl: leetcare,
    projectUrl: "https://leetcare.com/",
  },
  {
    title: "!Graduated",
    description:
      "A centralized UW course discovery tool with features like course search, saving, reviews, and filtering, integrated with UW Enterprise Web Services.",
    tags: ["Express", "Azure Auth", "MongoDB", "EWS API"],
    imageUrl: graduated,
    projectUrl: "https://github.com/laurakhot/Graduated-ExpressJS",
  },
  {
    title: "Eat Together",
    description:
      "A meal-sharing mobile app that connects 550+ users for planned shared dining experiences.",
    tags: ["React Native", "Expo", "Firebase"],
    imageUrl: eatTogether,
    projectUrl: "https://github.com/eat-together-team/eat-together",
  },
  {
    title: "Roomie",
    description:
      "A household management iOS app to streamline chores, expenses, and communication among roommates. Supports native messaging, push notifications, and shared household creation via join code.",
    tags: ["Swift", "UIKit", "Firebase", "MessageUI"],
    imageUrl: roomie,
    projectUrl: "https://github.com/laurakhot/Roomie-UIKit",
  },
] as const;

export const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Redux", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "Apollo", "Prisma"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress"]
  },
  {
    category: "AI",
    skills: ["OpenAI", "LangChain", "RAG", "Prompt Engineering"]
  },
  {
    category: "Cloud",
    skills: ["Git", "Docker", "AWS"]
  }
] as const;