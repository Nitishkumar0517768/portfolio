import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaCode, FaRocket, FaPaintBrush, FaCogs, FaPaperPlane, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';
import BackgroundBlobs from './BackgroundBlobs';

const Hero = () => {
    const typedEl = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ['Full Stack Developer', 'Web Developer', 'UI/UX Designer'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20 pb-10 bg-[#0B1F1A]">
            <div className="absolute inset-0 z-0">
                <ParticleBackground />
                <BackgroundBlobs />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 shadow-md mb-8" data-aos="fade-down">
                        <FaCode /> Welcome to my Portfolio
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-6 leading-tight tracking-tight" data-aos="fade-up" data-aos-delay="200">
                        <span className="block mb-2">I am Nitish Kumar</span>
                        <div className="text-[#10B981] h-12 md:h-16">
                            <span ref={typedEl}></span>
                        </div>
                    </h1>

                    <div className="flex flex-col gap-4 mb-10 text-[#E5E7EB]/80" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981]">
                                <FaRocket />
                            </span>
                            <span>Exploring web development through projects</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981]">
                                <FaPaintBrush />
                            </span>
                            <span>Designing simple and effective user interfaces</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981]/20 text-[#10B981]">
                                <FaCogs />
                            </span>
                            <span>Learning to build scalable full-stack applications</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12" data-aos="fade-up" data-aos-delay="600">
                        <a href="#projects" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#10B981] text-[#0B1F1A] font-semibold hover:bg-[#34D399] transition-colors shadow-lg shadow-[#10B981]/20">
                            <FaCode /> View Work
                        </a>
                        <a href="#contact" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-transparent text-[#10B981] font-semibold border border-[#10B981] hover:bg-[#10B981]/10 transition-colors">
                            <FaPaperPlane /> Contact Me
                        </a>
                        <a href="/resume.pdf" download="Nitish_Kumar_Resume.pdf" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#10B981]/10 text-[#10B981] font-semibold border border-[#10B981]/30 hover:bg-[#10B981] hover:text-[#0B1F1A] transition-colors shadow-lg shadow-[#10B981]/10">
                            <FaDownload /> Resume
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="700">
                        {[
                            { icon: FaGithub, href: "https://github.com/Nitishkumar0517768" },
                            { icon: SiLeetcode, href: "https://leetcode.com/u/Nitishkumar_05/" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/nitish-kumar-03a34a3a1/" },
                            { icon: FaTwitter, href: "https://x.com/Nitishkumar05cg" },
                            { icon: FaInstagram, href: "https://www.instagram.com/n_i_t_i_s_h_05/" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-[#10B981]/30 text-[#E5E7EB] hover:text-[#10B981] hover:border-[#10B981] hover:bg-[#10B981]/10 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="300">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                        {/* Soft green glow ring */}
                        <div className="absolute inset-0 rounded-full bg-[#10B981]/20 blur-xl animate-pulse group-hover:bg-[#10B981]/40 transition-colors duration-500"></div>
                        <img
                            src="/profile.jpg"
                            alt="Nitish Kumar"
                            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#10B981]/30 group-hover:border-[#10B981] shadow-2xl shadow-[#10B981]/20 transition-all duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
