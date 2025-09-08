// the home page

import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

// all imported components in global page.tsx should be server
// can have client components inside server components (subcomponents)

// presentational = server component 
// interactive = client component (use state, effects, event handlers, etc) 
// keep client components towards edges/ leaves of tree
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  );
}
