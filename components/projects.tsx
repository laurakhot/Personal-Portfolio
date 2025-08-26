
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import ProjectCard from './projectCard'



export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <ProjectCard {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

