import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMicroscope } from "react-icons/gi";
import { FaRegClipboard } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";




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
    location: "Seattle, WA",
    company: "Web Impact at UW",
    description:
      "Lead a 70+ member student organization developing web applications for local businesses, overseeing workshop programming, infrastructure improvements, partnerships, and recruitment while collaborating with officers to deliver industry-level solutions.",
    icon: React.createElement(FaUserTie), // using creat element since can't use jsx components in ts file
    date: "Sep 2025 - present",
    },
  {
    title: "Software Engineering Intern",
    location: "Issaquah, WA",
    company: "Costco IT",
    description:
      "Supported the deployment of a new search service to A/B testing with 10% of Costco.com traffic. Built Dataflow pipelines processing over 3.5+ million catalog products to enhance search relevance.",
    icon: React.createElement(CgWorkAlt), // using creat element since can't use jsx components in ts file
    date: "Jun 2025 - Sep 2025",
    },
  {
    title: "Undergraduate Teaching Assistant",
    location: "Seattle, WA",
    company: "Paul G. Allen School of Computer Science & Engineering",
    description:
      "Teaching data structures & algorithms (previously Java programming). Lead weekly sections and office hours, grade and provide feedback on assignments, develop exam questions and rubrics, and deliver guest lectures to 150+ students.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Sep 2024 - present",
  },
  {
    title: "Elementary Coding Instructor",
    location: "Seattle, WA",
    company: "Coding with Kids",
    description:
      "Taught weekly game development & robotics classes to elementary students with Scratch and Edison Robots, fostering interest in computer science.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jan 2024 - Jul 2024",
  },
  {
    title: "Research Assistant",
    location: "Seattle, WA",
    company: "Wendy Thomas Lab - UW Bioengineering",
    description:
      "Utilized LIS software to analyze antibody reactions to COVID-19 variants. Independently extracted over 100 cell samples.",
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
    category: "Languages",
    color: "border-blue-400",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Swift", "HTML", "CSS", "R"]
  },
  {
    category: "Frameworks",
    color: "border-green-400",
    skills: ["React", "NodeJS", "NextJS", "ExpressJS", "React Native", "Framer Motion", "TailwindCSS"]
  },
  {
    category: "Databases",
    color: "border-purple-400",
    skills: ["MongoDB", "SQL Server", "Firebase", "Prisma"]
  },
  {
    category: "Testing",
    color: "border-orange-400",
    skills: ["Jest", "Selenium", "Playwright", "XCTest", "JUnit"]
  },
  {
    category: "AI",
    color: "border-pink-400",
    skills: ["OpenAI", "Claude Code", "ElevenLabs"]
  },
  {
    category: "Cloud",
    color: "border-cyan-400",
    skills: ["GCP", "Azure", "Databricks"]
  }, 
  {
    category: "Tools",
    color: "border-yellow-400",
    skills: ["Git", "Docker", "CI/CD", "Agile"]
  }
] as const;