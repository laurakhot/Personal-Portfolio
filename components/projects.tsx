
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';

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
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul>
        {tags.map((tag, index) => (
            <li className="bg-black px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt={description} quality={95}/>
    </section>
  );
}
