import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaPaperPlane, FaUser, FaCommentDots, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
    // EMAILJS CONFIGURATION
    const SERVICE_ID = "service_gvukdjl";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "3Hkg39VW8AjgHAM_k";

    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        if (SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID" || PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
            alert("Please configure your EmailJS keys in Contact.jsx to send emails.");
            setStatus('error');
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    const contactInfo = [
        { icon: <FaEnvelope />, title: 'Email', value: 'nitish.kumar.05cg@gmail.com' },
        { icon: <FaPhone />, title: 'Phone', value: '+91 9835795451' },
        { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Ahmedabad, Gujarat, India' },
    ];

    return (
        <section id="contact" className="relative py-20 bg-[#0a0a0a]">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] text-sm font-semibold tracking-wider mb-4 border border-[#FFA040]/20">
                        Connect
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Get In Touch</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Let's discuss your next project</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Contact Info Cards */}
                    <motion.div
                        className="flex-1 flex flex-col gap-6 w-full"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                            {[
                                ...contactInfo,
                                {
                                    icon: <FaLinkedinIn size={20} />,
                                    title: 'LinkedIn',
                                    value: 'Let\'s Connect',
                                    link: 'https://www.linkedin.com/in/nitish-kumar-03a34a3a1/'
                                },
                                {
                                    icon: <FaGithub size={20} />,
                                    title: 'GitHub',
                                    value: 'View My Work',
                                    link: 'https://github.com/Nitishkumar0517768'
                                },
                                {
                                    icon: <SiLeetcode size={20} />,
                                    title: 'LeetCode',
                                    value: 'View Profile',
                                    link: 'https://leetcode.com/u/Nitishkumar_05/'
                                }
                            ].map((item, index) => {
                                const CardElement = item.link ? motion.a : motion.div;
                                const additionalProps = item.link ? {
                                    href: item.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {};

                                return (
                                    <CardElement
                                        key={index}
                                        {...additionalProps}
                                        className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-[#050505] border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:bg-[#FFA040]/5 transition-all duration-300 group h-full"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-[#FFA040]/10 text-[#FFA040] group-hover:bg-[#FFA040] group-hover:text-[#0a0a0a] transition-colors duration-300 mb-2">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col w-full text-center">
                                            <h4 className="text-xs text-[#E5E7EB]/50 uppercase tracking-wider mb-1 font-semibold">{item.title}</h4>
                                            <p className="text-sm md:text-base text-[#E5E7EB] font-medium group-hover:text-[#FFA040] transition-colors break-words break-all">
                                                {item.value}
                                            </p>
                                        </div>
                                    </CardElement>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="flex-1 flex flex-col gap-6 p-8 rounded-2xl bg-[#050505] border border-[#FFA040]/10 shadow-xl h-full justify-between"
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFA040]/50 group-focus-within:text-[#FFA040] transition-colors">
                                <FaUser />
                            </div>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-[#0a0a0a] border border-[#FFA040]/20 rounded-xl py-4 pl-12 pr-4 text-[#E5E7EB] placeholder-[#E5E7EB]/30 focus:outline-none focus:border-[#FFA040]/50 focus:ring-1 focus:ring-[#FFA040]/50 transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFA040]/50 group-focus-within:text-[#FFA040] transition-colors">
                                <FaEnvelope />
                            </div>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                                className="w-full bg-[#0a0a0a] border border-[#FFA040]/20 rounded-xl py-4 pl-12 pr-4 text-[#E5E7EB] placeholder-[#E5E7EB]/30 focus:outline-none focus:border-[#FFA040]/50 focus:ring-1 focus:ring-[#FFA040]/50 transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFA040]/50 group-focus-within:text-[#FFA040] transition-colors">
                                <FaCommentDots />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full bg-[#0a0a0a] border border-[#FFA040]/20 rounded-xl py-4 pl-12 pr-4 text-[#E5E7EB] placeholder-[#E5E7EB]/30 focus:outline-none focus:border-[#FFA040]/50 focus:ring-1 focus:ring-[#FFA040]/50 transition-all"
                            />
                        </div>

                        <div className="relative group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full bg-[#0a0a0a] border border-[#FFA040]/20 rounded-xl py-4 px-4 text-[#E5E7EB] placeholder-[#E5E7EB]/30 focus:outline-none focus:border-[#FFA040]/50 focus:ring-1 focus:ring-[#FFA040]/50 transition-all resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-[#FFA040]/10 text-[#FFA040] font-semibold border border-[#FFA040]/20 flex items-center justify-center gap-2 hover:bg-[#FFA040] hover:text-[#050505] transition-all disabled:opacity-50 disabled:cursor-not-allowed group uppercase tracking-wider"
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>

                        {status === 'success' && (
                            <motion.div
                                className="text-center text-[#FFA040] font-medium mt-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                ✓ Message sent successfully!
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                className="text-center text-red-400 font-medium mt-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                ✗ Failed to send. Please try again.
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
