'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100%,38rem)]" 
      initial={{ opacity: 0 }} 
      whileInView={{opacity: 1}} 
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-center text-gray-700 -mt-5">Reach out to me via email directly at <a href="mailto:laurak11@uw.edu" className="underline">laurak11@uw.edu</a> or through this form:</p>

        <form className="mt-10 flex flex-col">
            <input type="email" placeholder="Your email" className="px-4 h-14 rounded-lg borderBlack"/>
            <textarea placeholder="Type your message here" className="h-52 my-3 rounded-lg borderBlack p-4"/>
            <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950">
              Send <FaPaperPlane className="text-xs opacity-70 transition-al group-hover:translate-x-1 group-hover:-translate-y-1"/> 
            </button>
        </form>
    </motion.section>
  )
}
