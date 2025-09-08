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
    const { ref } = useSectionInView("Skills");
    return (
        <section ref={ref} className="mb-27 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                            key={index} 
                            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                            variants={fadeInVariant}
                            initial="initial"
                            whileInView="animate" // animation triggers when in view
                            viewport={{
                                once: true, // animate only once
                            }}
                            custom={index} // pass index as custom prop for staggered delay
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
