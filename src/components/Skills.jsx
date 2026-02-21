import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiNetlify, SiRender, SiVercel, SiC, SiCplusplus } from 'react-icons/si';
import BackgroundBlobs from './BackgroundBlobs';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
            { name: "Express JS", icon: <SiExpress className="text-[#E5E7EB]" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "REST API", icon: <FaNetworkWired className="text-[#10B981]" /> },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "GitHub", icon: <FaGithub className="text-[#E5E7EB]" /> },
            { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
            { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
            { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
            { name: "Vercel", icon: <SiVercel className="text-[#E5E7EB]" /> },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="relative py-20 bg-[#0B1F1A]">
            <BackgroundBlobs />
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wider mb-4 border border-[#10B981]/20">
                        Technical Skills
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB]">
                        My Skills
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="p-8 rounded-2xl bg-[#0a1814] border border-[#10B981]/10 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-[#10B981] mb-6 border-b border-[#10B981]/20 pb-4">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ y: -5 }}
                                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-[#0B1F1A] border border-[#10B981]/5 shadow-sm transition-all duration-300 hover:border-[#10B981]/30 hover:shadow-[#10B981]/10 hover:bg-[#10B981]/5"
                                    >
                                        <div className="text-4xl text-[#E5E7EB]/50 mb-3 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500">
                                            {skill.icon}
                                        </div>
                                        <p className="text-[#E5E7EB]/80 font-medium text-sm text-center group-hover:text-[#10B981] transition-colors">
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
