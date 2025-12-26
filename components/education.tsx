// 'use client'

// import React from 'react'
// import SectionHeading from './section-heading'
// import { motion } from 'framer-motion';
// import { useSectionInView } from '@/lib/hooks';

// export default function Education() {
//   const { ref } = useSectionInView("Education");

//   return (
//     <motion.section 
//         ref={ref}
//         className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.175 }}
//         id="education"
//     >
//         <SectionHeading>Education</SectionHeading>   
//         <p className="mb-3">
//             I am a full-stack developer with a passion for building dynamic and responsive web applications. 
//             With over 8 years of experience in the industry, I have honed my skills in various technologies including 
//             React, Next.js, Node.js, and more. I enjoy tackling complex problems and delivering high-quality solutions.
//         </p>
//     </motion.section>
//   )
// }
