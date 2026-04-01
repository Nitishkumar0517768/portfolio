import React from 'react';
import { motion } from 'framer-motion';
import { hackathons } from '../constants';
import { FaTrophy, FaCalendarAlt, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const HackathonCard = ({ index, title, organizer, date, achievement, description, image, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className="group relative w-full flex flex-col bg-[#050505] rounded-2xl overflow-hidden border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:shadow-xl hover:shadow-[#FFA040]/10 transition-all duration-300"
        >
            {/* Header / Image Area */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#0a0a0a]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 bg-[#FFA040]/20 backdrop-blur-md border border-[#FFA040]/30 text-[#FFA040] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                    <FaAward /> {achievement}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="flex items-center gap-2 text-[#FFA040] text-sm font-semibold mb-2">
                    <FaTrophy size={14} />
                    <span>{organizer}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#E5E7EB] mb-3 group-hover:text-[#FFA040] transition-colors duration-300">
                    {title}
                </h3>
                
                <div className="flex items-center gap-2 text-[#E5E7EB]/50 text-xs mb-4">
                    <FaCalendarAlt size={12} />
                    <span>{date}</span>
                </div>

                <p className="text-[#E5E7EB]/70 text-sm md:text-base mb-6 flex-1 pr-4 leading-relaxed">
                    {description}
                </p>

                {link && (
                    <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#FFA040] font-medium text-sm hover:underline"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        Learn More <FaExternalLinkAlt size={12} />
                    </motion.a>
                )}
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFA040] to-orange-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl pointer-events-none"></div>
        </motion.div>
    );
};

const Hackathons = () => {
    return (
        <section id="hackathons" className="relative py-20 bg-[#0a0a0a] min-h-[80vh]">
            {/* Background elements (similar to other sections) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#FFA040]/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-600/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] text-sm font-semibold tracking-wider mb-4 border border-[#FFA040]/20">
                        Competitions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Hackathon Journey</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">
                        Showcasing innovation, rapid problem-solving, and achievement in collaborative tech challenges.
                    </p>
                </motion.div>

                {/* Hackathons Grid */}
                <div className={`grid grid-cols-1 ${hackathons.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl mx-auto'} gap-8`}>
                    {hackathons.map((item, index) => (
                        <HackathonCard
                            key={`hackathon-${index}`}
                            index={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
