import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import BackgroundBlobs from './BackgroundBlobs';

const ProjectCard = ({ index, title, description, image, github, demo, youtube }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className="group w-full flex flex-col bg-[#0a1814] rounded-2xl overflow-hidden border border-[#10B981]/10 shadow-lg hover:border-[#10B981]/30 hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300"
        >
            {/* Image Section */}
            <a href={demo} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 md:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B1F1A]/20 transition-opacity duration-300 group-hover:opacity-0"></div>
            </a>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#E5E7EB] mb-3 group-hover:text-[#10B981] transition-colors duration-300">{title}</h3>
                <p className="text-[#E5E7EB]/70 text-sm md:text-base mb-6 flex-1 pr-4 leading-relaxed">{description}</p>

                <div className="flex flex-wrap items-center gap-6 mt-auto">
                    {/* Code Button */}
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#10B981]/10 text-[#10B981] font-medium text-sm rounded-lg border border-[#10B981]/20 hover:bg-[#10B981] hover:text-[#0a1814] transition-colors shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub size={16} />
                        <span>Code</span>
                    </motion.a>

                    {/* Live Button */}
                    <motion.a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#10B981] font-medium text-sm transition-colors group/link"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaExternalLinkAlt size={14} />
                        <span className="relative">
                            Live
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#10B981] transition-all duration-300 group-hover/link:w-full"></span>
                        </span>
                    </motion.a>

                    {/* Demo / YouTube Button */}
                    {youtube && (
                        <motion.a
                            href={youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#10B981] font-medium text-sm transition-colors group/link2"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaYoutube size={16} />
                            <span className="relative">
                                Demo
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#10B981] transition-all duration-300 group-hover/link2:w-full"></span>
                            </span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Physics Wallah Clone",
            description: "A static clone of the Physics Wallah (PW) educational platform landing page.",
            image: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/6d860814-fc14-4c5e-8f1f-248faa430794.webp",
            github: "https://github.com/Nitishkumar0517768/Physics-wallah-clone",
            demo: "https://physics-wallah.netlify.app/",
            youtube: "https://youtu.be/zk7hT5LmgXU?si=4WUXdr_KvO1046ER",
        },
        {
            title: "Snitch Clone",
            description: "A high-fidelity, fully responsive e-commerce frontend clone of the Snitch fashion platform.",
            image: "https://res.cloudinary.com/dbknqb3e7/image/upload/v1767767880/Screenshot_2026-01-07_120828_dvjqpe.png",
            github: "https://github.com/Nitishkumar0517768/snitch-clone",
            demo: "https://snitch-clone-by-nitish-cg.netlify.app/",
            youtube: "https://youtu.be/IJ5GIHZKLAE?si=6Uh8mB5VFxCKdeZU",
        },
        {
            title: "Prada Clone",
            description: "A front-end clone of the Prada website. High-fidelity responsive design.",
            image: "https://res.cloudinary.com/dbknqb3e7/image/upload/v1767800281/Screenshot_2026-01-07_210529_qmeung.png",
            github: "https://github.com/Nitishkumar0517768/Prada-clone",
            demo: "https://prada-by-nitish.netlify.app/",
            youtube: "https://youtu.be/qFy3A32BE3s?si=n83Du9EkaRgdql9z",
        },
        {
            title: "Numerai AI Platform",
            description: "Data science competition platform with AI-powered predictions and analytics.",
            image: "/numerai-logo.png",
            github: "https://github.com/Nitishkumar0517768/Numerai-clone",
            demo: "https://numerai-by-nitish.netlify.app/",
            youtube: "https://youtu.be/W-tjm-ugvjI?si=RmADDfWXNrOQhifW",
        },
        {
            title: "Softonic Clone",
            description: "Full-featured software download platform clone with modern UI and search functionality.",
            image: "/softonic.png",
            github: "https://github.com/Nitishkumar0517768/softonic-clone",
            demo: "https://softonic-clone.netlify.app/",
            youtube: "https://youtu.be/ipRAwg4mQuo?si=BQemYgcTogS_OC2j",
        },
        {
            title: "Fruit Chilli Clone",
            description: "E-commerce platform clone for fruit and grocery shopping with modern design.",
            image: "https://fruitchillpops.com/cdn/shop/files/fruitchill_image_1_1.png?v=1745050791&width=3200",
            github: "https://github.com/Nitishkumar0517768/Fruit-chilli-clone",
            demo: "https://fruit-chilli.netlify.app/",
            youtube: "https://youtu.be/eyXSIlw20pw?si=D1rMN2Glt5V-D92Q",
        }
    ];

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="relative py-20 bg-[#0B1F1A]">
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
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Featured Projects</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Crafting digital experiences with passion and precision</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className="text-center mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-lg bg-transparent text-[#10B981] font-semibold border border-[#10B981] hover:bg-[#10B981]/10 transition-colors shadow-lg shadow-[#10B981]/5"
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
