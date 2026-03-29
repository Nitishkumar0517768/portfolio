import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaCode, FaRocket, FaPaintBrush, FaCogs, FaPaperPlane, FaDownload } from 'react-icons/fa';
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
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20 pb-10 bg-[#0a0a0a]">
            {/* Absolute low z-index Three.js wrapper */}
            <div className="absolute inset-0 z-0">
                <HeroBackground />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] border border-[#FFA040]/20 shadow-md mb-8" data-aos="fade-down">
                        <FaCode /> Welcome to my Portfolio
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-6 leading-tight tracking-tight" data-aos="fade-up" data-aos-delay="200">
                        <span className="block mb-2">I am Nitish Kumar</span>
                        <div className="text-[#FFA040] h-12 md:h-16">
                            <span ref={typedEl}></span>
                        </div>
                    </h1>

                    <div className="flex flex-col gap-4 mb-10 text-[#E5E7EB]/80" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaRocket />
                            </span>
                            <span>Exploring web development through projects</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaPaintBrush />
                            </span>
                            <span>Designing simple and effective user interfaces</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFA040]/20 text-[#FFA040]">
                                <FaCogs />
                            </span>
                            <span>Learning to build scalable full-stack applications</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12" data-aos="fade-up" data-aos-delay="600">
                        <a href="#projects" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#FFA040] text-[#0a0a0a] font-semibold hover:bg-[#FFCF70] transition-colors shadow-lg shadow-[#FFA040]/20">
                            <FaCode /> View Work
                        </a>
                        <a href="#contact" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-transparent text-[#FFA040] font-semibold border border-[#FFA040] hover:bg-[#FFA040]/10 transition-colors">
                            <FaPaperPlane /> Contact Me
                        </a>
                        <a href="/Nitish Kumar Resume.pdf" download="Nitish Kumar Resume.pdf" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#FFA040]/10 text-[#FFA040] font-semibold border border-[#FFA040]/30 hover:bg-[#FFA040] hover:text-[#0a0a0a] transition-colors shadow-lg shadow-[#FFA040]/10">
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
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-[#FFA040]/30 text-[#E5E7EB] hover:text-[#FFA040] hover:border-[#FFA040] hover:bg-[#FFA040]/10 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="300">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                        {/* Outer animated spinning halo ring */}
                        <div className="absolute -inset-4 rounded-full border border-[#f97316]/30 animate-[spin_10s_linear_infinite] group-hover:border-[#f97316]/50 transition-colors duration-500 object-cover pointer-events-none">
                            <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#f97316] rounded-full shadow-[0_0_10px_#f97316] -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#FFA040] rounded-full shadow-[0_0_8px_#FFA040] -translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        {/* Soft glow pulse center blob */}
                        <div className="absolute inset-0 rounded-full bg-[#f97316]/20 blur-xl animate-pulse group-hover:bg-[#f97316]/40 transition-colors duration-500 pointer-events-none"></div>
                        <img
                            src="https://res.cloudinary.com/dbknqb3e7/image/upload/v1774770920/profile_image_zoom-out_qpv1sx.jpg"
                            alt="Nitish Kumar"
                            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#f97316]/40 group-hover:border-[#f97316] shadow-2xl shadow-[#f97316]/30 transition-all duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
