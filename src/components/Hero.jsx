import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaCode, FaRocket, FaPaintBrush, FaCogs, FaPaperPlane, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HeroBackground from './HeroBackground';

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
        <section id="home" className="relative flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16 bg-[#121212]">
            {/* Absolute low z-index Three.js wrapper */}
            <div className="absolute inset-0 z-0 ">
                <HeroBackground />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 -mt-13">

                {/* Text Content */}
                <div className="flex-[1.2] flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 mb-8" data-aos="fade-down">
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] border border-[#FFA040]/20 shadow-md">
                            <FaCode className="text-xs sm:text-base" />
                            <span className="text-xs sm:text-base">Welcome to my Portfolio</span>
                        </div>
                        <a 
                            href="/resume.html" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden flex items-center gap-2 px-4 py-2 sm:py-3 rounded-full bg-[#FFA040] text-[#0a0a0a] text-xs font-bold shadow-lg shadow-[#FFA040]/20"
                        >
                            View Resume
                        </a>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-8 leading-tight tracking-tight font-outfit" data-aos="fade-up" data-aos-delay="200">
                        <span className="block mb-4">I am Nitish Kumar</span>
                        <div className="text-[#FFA040] h-20 md:h-16 lg:h-20 flex items-center justify-center md:justify-start lg:whitespace-nowrap">
                            <span ref={typedEl}></span>
                        </div>
                    </h1>

                    <div className="flex flex-col gap-4 mb-10 text-[#9CA3AF] w-full" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex items-center gap-3 sm:gap-4 w-full">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaRocket className="text-sm sm:text-base" />
                            </span>
                            <span className="text-[13px] sm:text-base whitespace-nowrap">Exploring web development through projects</span>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 w-full">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaPaintBrush className="text-sm sm:text-base" />
                            </span>
                            <span className="text-[13px] sm:text-base whitespace-nowrap">Designing simple and effective user interfaces</span>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 w-full">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaCogs className="text-sm sm:text-base" />
                            </span>
                            <span className="text-[13px] sm:text-base whitespace-nowrap">Learning to build scalable full-stack applications</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 justify-center md:justify-start mb-12 w-full" data-aos="fade-up" data-aos-delay="600">
                        <a href="#projects" className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-lg bg-[#FFA040] text-[#0a0a0a] font-semibold hover:bg-[#FFCF70] transition-colors shadow-lg shadow-[#FFA040]/20 text-sm sm:text-base">
                            <FaCode /> View Work
                        </a>
                        <a href="#contact" className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-lg bg-transparent text-[#FFA040] font-semibold border border-[#FFA040] hover:bg-[#FFA040]/10 transition-colors text-sm sm:text-base">
                            <FaPaperPlane /> Contact
                        </a>
                        <a href="/Nitish_Kumar_Resume.pdf" download="Nitish_Kumar_Resume.pdf" className="col-span-2 flex items-center justify-center gap-2 px-4 sm:px-8 py-3 rounded-lg bg-[#FFA040]/10 text-[#FFA040] font-semibold border border-[#FFA040]/30 hover:bg-[#FFA040] hover:text-[#0a0a0a] transition-colors shadow-lg shadow-[#FFA040]/10 text-sm sm:text-base">
                            <FaDownload /> Resume
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="700">
                        {[
                            { icon: FaGithub, href: "https://github.com/Nitishkumar0517768" },
                            { icon: SiLeetcode, href: "https://leetcode.com/u/Nitishkumar_05/" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/nitish-kumar-03a34a3a1/" },
                            { icon: FaTwitter, href: "https://x.com/Nitishkumar05cg" },
                            { icon: FaYoutube, href: "https://www.youtube.com/@coding_by_Nitish" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-[#FFA040]/30 text-[#EAEAEA] hover:text-[#FFA040] hover:border-[#FFA040] hover:bg-[#FFA040]/10 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="300">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                        {/* Outer animated spinning halo ring */}
                        <div className="absolute -inset-4 rounded-full border border-[#FFA040]/30 animate-[spin_10s_linear_infinite] group-hover:border-[#FFA040]/50 transition-colors duration-500 object-cover pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#FFA040] rounded-full shadow-[0_0_10px_#FFA040] -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#FFA040] rounded-full shadow-[0_0_8px_#FFA040] -translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        {/* Soft glow pulse center blob */}
                        <div className="absolute inset-0 rounded-full bg-[#FFA040]/20 blur-xl animate-pulse group-hover:bg-[#FFA040]/40 transition-colors duration-500 pointer-events-none"></div>
                        <img
                            src="https://res.cloudinary.com/dbknqb3e7/image/upload/v1783055538/profile-pic_pemi8m.jpg"
                            alt="Nitish Kumar"
                            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#FFA040]/40 group-hover:border-[#FFA040] shadow-2xl shadow-[#FFA040]/30 transition-all duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
