import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = ({ theme, setTheme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll spy logic
            const sections = document.querySelectorAll("section[id], header[id]");
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount to set initial active state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'skills', label: 'Skills', href: '#skills' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'certificates', label: 'Certificates', href: '#certificates' },
        { id: 'education', label: 'Education', href: '#education' },
        { id: 'contact', label: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (id) => {
        setActiveLink(id);
        setMobileMenuOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#0B1F1A] shadow-lg shadow-black/10 dark:shadow-black/20 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="text-2xl font-bold tracking-wider text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Nitish kumar
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            className={`group relative text-sm font-medium transition-colors duration-300 ${activeLink === link.id ? 'text-[#10B981]' : 'text-[#0B1F1A] dark:text-[#E5E7EB] hover:text-[#10B981]'
                                }`}
                            onClick={() => handleNavClick(link.id)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.label}
                            {/* Active effect underline */}
                            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#10B981] transition-all duration-300 ${activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        download="Nitish_Kumar_Resume.pdf"
                        className="px-5 py-2 rounded-lg bg-[#10B981]/10 text-[#10B981] font-semibold border border-[#10B981]/20 hover:bg-[#10B981] hover:text-[#0B1F1A] transition-all duration-300 shadow-[#10B981]/10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navLinks.length * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <motion.button
                        className="text-[#0B1F1A] dark:text-[#E5E7EB] hover:text-[#10B981] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <HiMenuAlt3 size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-[#0a1814] border-t border-[#10B981]/20 overflow-hidden shadow-xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    className={`text-base font-medium transition-colors ${activeLink === link.id ? 'text-[#10B981]' : 'text-[#E5E7EB] hover:text-[#10B981]'
                                        }`}
                                    onClick={() => handleNavClick(link.id)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/resume.pdf"
                                download="Nitish_Kumar_Resume.pdf"
                                className="mt-2 w-full px-6 py-3 text-center rounded-lg bg-[#10B981]/10 text-[#10B981] font-semibold border border-[#10B981]/20 hover:bg-[#10B981] hover:text-[#0B1F1A] transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
