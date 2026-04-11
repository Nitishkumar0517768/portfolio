import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', to: '/' },
        { id: 'about', label: 'About', to: '/about' },
        { id: 'skills', label: 'Skills', to: '/skills' },
        { id: 'projects', label: 'Projects', to: '/projects' },
        { id: 'hackathons', label: 'Hackathons', to: '/hackathons' },
        { id: 'certificates', label: 'Certificates', to: '/certificates' },
        { id: 'education', label: 'Education', to: '/education' },
        { id: 'contact', label: 'Contact', to: '/contact' }
    ];

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/90 dark:bg-[#0a0a0a] shadow-lg shadow-black/10 dark:shadow-black/20 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-bold tracking-wider text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <NavLink to="/" className="text-[#0a0a0a] dark:text-[#E5E7EB]">
                        Nitish kumar
                    </NavLink>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <NavLink
                                to={link.to}
                                className={`group relative text-sm font-medium transition-colors duration-300 ${isActive(link.to) ? 'text-[#FFA040]' : 'text-[#0a0a0a] dark:text-[#E5E7EB] hover:text-[#FFA040]'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                                {/* Active effect underline */}
                                <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#FFA040] transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </NavLink>
                        </motion.div>
                    ))}
                    <motion.a
                        href="/resume.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-[#FFA040]/10 text-[#FFA040] font-semibold border border-[#FFA040]/20 hover:bg-[#FFA040] hover:text-[#0a0a0a] transition-all duration-300 shadow-[#FFA040]/10"
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
                        className="text-[#0a0a0a] dark:text-[#E5E7EB] hover:text-[#FFA040] transition-colors"
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
                        className="md:hidden bg-[#050505] border-t border-[#FFA040]/20 overflow-hidden shadow-xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <NavLink
                                        to={link.to}
                                        className={`text-base font-medium transition-colors ${isActive(link.to) ? 'text-[#FFA040]' : 'text-[#E5E7EB] hover:text-[#FFA040]'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <motion.a
                                href="/resume.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 w-full px-6 py-3 text-center rounded-lg bg-[#FFA040]/10 text-[#FFA040] font-semibold border border-[#FFA040]/20 hover:bg-[#FFA040] hover:text-[#0a0a0a] transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
