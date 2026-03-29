import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../constants';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const EducationCard = ({ education, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="w-full"
        >
            <div className="relative group flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-[#050505] border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:shadow-[#FFA040]/20 transition-all duration-300 overflow-hidden">
                {/* Icon Badge */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#FFA040]/10 border border-[#FFA040]/20 group-hover:bg-[#FFA040]/20 transition-colors">
                        <img
                            src={education.icon}
                            alt={education.company_name}
                            className="w-10 h-10 object-contain drop-shadow-md"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-sm font-medium text-[#FFA040] bg-[#FFA040]/10 w-fit px-3 py-1 rounded-full border border-[#FFA040]/20">
                        <FaCalendarAlt size={12} />
                        <span>{education.date}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#E5E7EB] mb-2">{education.title}</h3>

                    <div className="flex items-center gap-2 text-[#E5E7EB]/70 mb-4 font-medium">
                        <FaGraduationCap className="text-[#FFA040]" />
                        <span>{education.company_name}</span>
                    </div>

                    {education.points && education.points.length > 0 && (
                        <ul className="space-y-2 mt-2">
                            {education.points.map((point, idx) => (
                                <li key={idx} className="flex items-start text-[#E5E7EB]/80 text-sm md:text-base leading-relaxed">
                                    <span className="text-[#FFA040] mr-2 mt-1.5">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="relative py-20 bg-[#0a0a0a]">
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] text-sm font-semibold tracking-wider mb-4 border border-[#FFA040]/20">
                        Academic Journey
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Education & Training</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Building a strong foundation in technology and computer science</p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {education.map((edu, index) => (
                        <EducationCard key={index} education={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
