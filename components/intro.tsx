"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "tween", 
                        duration: 0.2,
                    }}
                >
                    <Image 
                        src="/intro.jpg" 
                        alt="Laura Khotemlyansky"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                    />
                </motion.div>
                <motion.span 
                    className="absolute bottom-0 right-0 text-3xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    👋🏻
                </motion.span>
            </div>
        </div>
        <p>
            {`Hi, I'm Laura Khotemlyansky, a full stack web and app developer specializing in building high-quality, user-friendly digital experiences. 
            With a passion for coding and a keen eye for design, I create responsive and efficient applications that meet client needs and exceed expectations.`}
        </p>
    </section>
  )
}
