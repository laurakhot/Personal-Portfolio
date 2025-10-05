import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-center">Feel free to reach out to me via email directly at <a href="mailto:laurak11@uw.edu" className="underline">laurak11@uw.edu</a> or thorugh this form:</p>

        <form>
            <input type="email"/>
            <textarea />
            <button type="submit">Send <FaPaperPlane/> </button>
        </form>
    </section>
  )
}
