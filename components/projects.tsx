
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
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

type ProjectCardProps = (typeof projectsData)[number];

function ProjectCard({title, description, tags, imageUrl } : ProjectCardProps) {
  return (
    <div>{title}</div>
  )
}
