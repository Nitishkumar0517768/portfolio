import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
    const skills = [
        { icon: <FaCode />, title: "Clean Code", desc: "Writing maintainable and scalable code" },
        { icon: <FaLaptopCode />, title: "Web Development", desc: "Building modern web applications" },
        { icon: <FaRocket />, title: "Fast Learner", desc: "Quick to adapt new technologies" },
        { icon: <FaHeart />, title: "Passionate", desc: "Love creating amazing experiences" }
    ];

    return (
        <section id="about" className="relative py-20 bg-[#0a0a0a]">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] text-sm font-semibold tracking-wider mb-4 border border-[#FFA040]/20">
                        Introduction
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">About Me</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Passionate developer crafting digital solutions</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Main Content */}
                    <motion.div
                        className="p-8 rounded-2xl bg-[#050505] border border-[#FFA040]/10 shadow-xl"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-[#E5E7EB] mb-6">Hello!</h3>
                        <p className="text-[#E5E7EB]/80 leading-relaxed mb-6">
                            I'm <span className="font-semibold text-[#FFA040]">Nitish Kumar</span>, a passionate Full Stack Developer
                            specializing in building exceptional digital experiences. Currently pursuing
                            <span className="font-semibold text-[#FFA040]"> B.E. in Computer Science Engineering</span> at
                            Codinggita x Swaminrayan University.
                        </p>
                        <p className="text-[#E5E7EB]/80 leading-relaxed mb-8">
                            I love transforming ideas into reality through code. My journey in web development
                            has equipped me with expertise in modern technologies like React, Node.js, and MongoDB.
                            I'm passionate about creating user-friendly, responsive, and visually appealing applications
                            that solve real-world problems.
                        </p>

                        <div className="flex gap-8 justify-center sm:justify-start">
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-[#FFA040] mb-1">6+</h4>
                                <p className="text-sm text-[#E5E7EB]/70 uppercase tracking-wider">Projects</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-[#FFA040] mb-1">4+</h4>
                                <p className="text-sm text-[#E5E7EB]/70 uppercase tracking-wider">Certificates</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-[#FFA040] mb-1">100%</h4>
                                <p className="text-sm text-[#E5E7EB]/70 uppercase tracking-wider">Dedication</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-2xl bg-[#050505] border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:bg-[#FFA040]/5 transition-all duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl text-[#FFA040] mb-4">{skill.icon}</div>
                                <h4 className="text-lg font-semibold text-[#E5E7EB] mb-2">{skill.title}</h4>
                                <p className="text-sm text-[#E5E7EB]/70">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
