'use client'
import React, { useRef, useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    const { setActiveSection, setLastClick } = useActiveSectionContext();
    const formRef = useRef<HTMLFormElement>(null);
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setPending(true);
        setStatus("idle");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );
            setStatus("success");
            formRef.current.reset();
        } catch {
            setStatus("error");
        }
        setPending(false);
    };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onClick={() => {setActiveSection("Contact");
        setLastClick(Date.now());
    }}
>

        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-center text-gray-700 -mt-5">Reach out to me via email directly at <a href="mailto:khot.laura@gmail.com" className="underline">khot.laura@gmail.com</a> or through this form:</p>

        <form ref={formRef} className="mt-10 flex flex-col" onSubmit={handleSubmit}>
            <input type="email" name="user_email" required maxLength={500} placeholder="Your email" className="px-4 h-14 rounded-lg borderBlack"/>
            <textarea name="message" placeholder="Type your message here" required maxLength={500} className="h-52 my-3 rounded-lg borderBlack p-4"/>
            <button
              type="submit"
              disabled={pending}
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
            >
              {pending ? (
                <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></span>
              ) : (
                <>Send <FaPaperPlane className="text-xs opacity-70 transition-al group-hover:translate-x-1 group-hover:-translate-y-1"/></>
              )}
            </button>
            {status === "success" && <p className="mt-3 text-green-600">Message sent successfully!</p>}
            {status === "error" && <p className="mt-3 text-red-600">Something went wrong. Please try again.</p>}
        </form>
    </motion.section>
  )
}
