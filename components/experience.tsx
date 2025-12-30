'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section id="experience"
    className="scroll-mt-28 w-full max-w-screen-lg mx-auto px-4 mb-28 sm:mb-40"
    ref={ref}
    >
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="#f3f4f6">
            {experiencesData.map((val, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f3f4f6',
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            textAlign: "left",
                            }}
                        contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
                        date={val.date}
                        icon={val.icon}
                        iconStyle={{ background: "white", fontSize: "1.5rem" }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 capitalize">{val.title}</h3>
                        <p className="text-base font-semibold text-gray-700 !mt-1">{val.company}</p>
                        <p className="text-sm text-gray-500 !mt-0.5 italic">{val.location}</p>
                        <p className="!mt-3 !font-normal text-gray-600 leading-relaxed">{val.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
    </section>
  )
}

      {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement> */}