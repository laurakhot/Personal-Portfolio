'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaGraduationCap, FaCoffee, FaCode, FaLaptopCode, FaMusic } from 'react-icons/fa';

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {/* Fact 1 */}
        <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <FaGraduationCap className="text-4xl text-purple-500" />
          <p className="text-left">B.S. Informatics @ University of Washington</p>
        </div>

        {/* Fact 3 */}
        <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <FaCode className="text-4xl text-pink-500" />
          <p className="text-left">Passionate about full-stack development</p>
        </div>

        {/* Fact 2 */}
        <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <FaCoffee className="text-4xl text-pink-500" />
          <p className="text-left">Extreme coffee enthusiast</p>
        </div>

        

        {/* Fact 4 */}
        <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <FaMusic className="text-4xl text-purple-500" />
          <p className="text-left">Music connoisseur</p>
        </div>
      </div>
    </motion.section>
  );
}