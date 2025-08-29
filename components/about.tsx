'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();


  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section 
        ref={ref}
        className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About Me</SectionHeading>   
        <p className="mb-3">
            I am a full-stack developer with a passion for building dynamic and responsive web applications. 
            With over 8 years of experience in the industry, I have honed my skills in various technologies including 
            React, Next.js, Node.js, and more. I enjoy tackling complex problems and delivering high-quality solutions.
        </p>
        <p> 
            Loren ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </motion.section>
  )
}
