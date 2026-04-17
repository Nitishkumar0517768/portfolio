import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hackathons } from '../constants';
import { FaTrophy, FaCalendarAlt, FaExternalLinkAlt, FaAward, FaClock, FaTimes, FaGithub } from 'react-icons/fa';

const HackathonCard = ({ index, title, organizer, date, achievement, description, image, duration, link, onClick }) => {
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
            onClick={onClick}
            className="group relative w-full flex flex-col bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:shadow-xl hover:shadow-[#FFA040]/10 transition-all duration-300 cursor-pointer"
        >
            {/* Header / Image Area */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#121212]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                
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
                
                <h3 className="text-xl md:text-2xl font-bold text-[#EAEAEA] mb-3 group-hover:text-[#FFA040] transition-colors duration-300">
                    {title}
                </h3>
                
                <div className="flex items-center gap-4 text-[#9CA3AF] text-xs mb-4">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt size={12} />
                        <span>{date}</span>
                    </div>
                    {duration && (
                        <div className="flex items-center gap-2">
                            <FaClock size={12} />
                            <span>{duration}</span>
                        </div>
                    )}
                </div>

                <p className="text-[#9CA3AF] text-sm md:text-base flex-1 pr-4 leading-relaxed">
                    {description}
                </p>
                <div className="mt-4 text-[#FFA040] text-sm font-medium flex items-center gap-2">
                    View Details & Certificate <FaExternalLinkAlt size={12} />
                </div>
            </div>

        </motion.div>
    );
};

const Hackathons = () => {
    const [selectedHackathon, setSelectedHackathon] = useState(null);

    return (
        <section id="hackathons" className="relative py-20 bg-[#121212] min-h-[80vh]">
            {/* Background elements */}

            <Helmet>
                <title>Hackathons - Nitish kumar</title>
                <meta name='description' content='Hackathons - Nitish kumar'/>
            </Helmet>

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
                    <h2 className="text-3xl md:text-5xl font-bold text-[#EAEAEA] mb-4">Hackathon Journey</h2>
                    <p className="text-[#9CA3AF] max-w-2xl mx-auto">
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
                            onClick={() => setSelectedHackathon(item)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedHackathon && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedHackathon(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1A1A1A] border border-[#FFA040]/20 rounded-2xl shadow-2xl sidebar-scroll"
                        >
                            <button
                                onClick={() => setSelectedHackathon(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-[#FFA040] text-gray-300 hover:text-black rounded-full transition-colors"
                            >
                                <FaTimes />
                            </button>

                            {/* Certificate Image */}
                            <div className="w-full h-64 md:h-96 bg-[#121212] relative flex items-center justify-center border-b border-gray-800">
                                <img 
                                    src={selectedHackathon.image} 
                                    alt="Certificate" 
                                    className="w-full h-full object-contain p-4" 
                                />
                            </div>

                            <div className="p-6 md:p-10 space-y-8">
                                {/* Title and Header Info */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-3">{selectedHackathon.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-[#FFA040]">
                                        <div className="flex items-center gap-2"><FaTrophy /> {selectedHackathon.organizer}</div>
                                        <span className="hidden sm:inline">•</span>
                                        <div className="flex items-center gap-2"><FaAward /> {selectedHackathon.achievement}</div>
                                    </div>
                                </div>
                                
                                {/* Problem Statement */}
                                {selectedHackathon.problem_statement && (
                                    <div>
                                        <h4 className="border-l-4 border-red-500 pl-3 text-xl font-bold text-[#EAEAEA] mb-3">Problem Statement</h4>
                                        <p className="text-[#9CA3AF] leading-relaxed ml-4">{selectedHackathon.problem_statement}</p>
                                    </div>
                                )}

                                {/* Solution */}
                                {selectedHackathon.solution && (
                                    <div>
                                        <h4 className="border-l-4 border-green-500 pl-3 text-xl font-bold text-[#EAEAEA] mb-3">Solution Formulated</h4>
                                        <p className="text-[#9CA3AF] leading-relaxed ml-4">{selectedHackathon.solution}</p>
                                    </div>
                                )}

                                {/* Technologies */}
                                {selectedHackathon.tech && (
                                    <div>
                                        <h4 className="border-l-4 border-blue-500 pl-3 text-xl font-bold text-[#EAEAEA] mb-3">Technologies Leveraged</h4>
                                        <p className="text-[#FFA040] font-medium ml-4 leading-relaxed">{selectedHackathon.tech}</p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 pt-4 mt-8 border-t border-gray-800">
                                    {selectedHackathon.code_link && (
                                        <a href={selectedHackathon.code_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl transition-all hover:-translate-y-1 shadow-lg">
                                            <FaGithub size={18} /> Source Code
                                        </a>
                                    )}
                                    {selectedHackathon.live_link && (
                                        <a href={selectedHackathon.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FFA040] hover:bg-orange-500 text-black font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg">
                                            <FaExternalLinkAlt size={16} /> Live Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hackathons;
