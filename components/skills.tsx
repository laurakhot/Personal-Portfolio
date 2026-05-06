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

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    let skillIndex = 0;

    return (
        <section id="skills" ref={ref} className="mb-27 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My Skills</SectionHeading>
            <div className="flex flex-col gap-6">
                {skillsData.map((category) => (
                    <div key={category.category}>
                        <h3 className={`text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3`}>
                            {category.category}
                        </h3>
                        <ul className="flex flex-nowrap justify-center gap-2 text-lg text-gray-800 dark:text-gray-100">
                            {category.skills.map((skill) => {
                                const currentIndex = skillIndex++;
                                return (
                                    <motion.li
                                        key={`${category.category}-${skill}`}
                                        className={`group relative bg-white dark:bg-gray-800 ${category.color} border rounded-xl px-5 py-3 whitespace-nowrap cursor-default overflow-hidden`}
                                        variants={fadeInVariant}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={currentIndex}
                                        whileHover={{
                                            scale: 1.15,
                                            transition: { duration: 0.2, ease: "easeOut" },
                                        }}
                                    >
                                        <span
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl"
                                            style={{ backgroundColor: category.hoverBg }}
                                        />
                                        <span className="relative z-10">{skill}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
