'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInVariant = {
    initial: { opacity: 0, y: 100 }, // starting 100 pixels lower
    animate: (index: number) => ({ opacity: 1, y: 0, transition: {delay: 0.05 * index}}) // animate to natural position
    // wrap object in parenthesis to not write return keyword
}

const categoryColors: { [key: string]: string } = {
    "Frontend": "border-blue-400",
    "Backend": "border-green-400",
    "Databases": "border-purple-400",
    "Testing": "border-orange-400",
    "AI": "border-pink-400",
    "Cloud": "border-cyan-400",
};

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    let skillIndex = 0;

    return (
        <section id="skills" ref={ref} className="mb-27 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((category) =>
                    category.skills.map((skill) => {
                        const currentIndex = skillIndex++;
                        return (
                            <motion.li
                                key={`${category.category}-${skill}`}
                                className={`bg-white ${categoryColors[category.category]} border rounded-xl px-5 py-3`}
                                variants={fadeInVariant}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={currentIndex}
                            >
                                {skill}
                            </motion.li>
                        );
                    })
                )}
            </ul>
        </section>
    )
}
