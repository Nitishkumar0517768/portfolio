import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaArrowLeft, FaLayerGroup, FaClone } from 'react-icons/fa';

const ProjectCard = ({ index, title, description, image, github, demo, youtube }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className="group w-full flex flex-col bg-[#050505] rounded-2xl overflow-hidden border border-[#FFA040]/10 shadow-lg hover:border-[#FFA040]/30 hover:shadow-xl hover:shadow-[#FFA040]/10 transition-all duration-300"
        >
            {/* Image Section */}
            <a href={demo} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 md:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20 transition-opacity duration-300 group-hover:opacity-0"></div>
            </a>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#E5E7EB] mb-3 group-hover:text-[#FFA040] transition-colors duration-300">{title}</h3>
                <p className="text-[#E5E7EB]/70 text-sm md:text-base mb-6 flex-1 pr-4 leading-relaxed">{description}</p>

                <div className="flex flex-wrap items-center gap-6 mt-auto">
                    {/* Code Button */}
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#FFA040]/10 text-[#FFA040] font-medium text-sm rounded-lg border border-[#FFA040]/20 hover:bg-[#FFA040] hover:text-[#050505] transition-colors shadow-md"
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
                        className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#FFA040] font-medium text-sm transition-colors group/link"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaExternalLinkAlt size={14} />
                        <span className="relative">
                            Live
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FFA040] transition-all duration-300 group-hover/link:w-full"></span>
                        </span>
                    </motion.a>

                    {/* Demo / YouTube Button */}
                    {youtube && (
                        <motion.a
                            href={youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#E5E7EB] hover:text-[#FFA040] font-medium text-sm transition-colors group/link2"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaYoutube size={16} />
                            <span className="relative">
                                Demo
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FFA040] transition-all duration-300 group-hover/link2:w-full"></span>
                            </span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Category Card Component (The Folders)
const CategoryCard = ({ title, icon: Icon, delay, onClick, count, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#FFA040]/20 p-8 md:p-12 hover:border-[#FFA040] hover:shadow-2xl hover:shadow-[#FFA040]/10 transition-all duration-500 h-72 md:h-80"
    >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="absolute -right-10 -top-10 text-[#FFA040]/10 group-hover:text-[#FFA040]/20 transition-colors duration-500 z-0">
            <Icon size={180} />
        </div>
        
        <div className="relative z-10 flex flex-col h-full justify-between text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#0a0a0a]/60 backdrop-blur-md border border-[#FFA040]/30 text-[#FFA040] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Icon size={28} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-[#E5E7EB] mb-2 group-hover:text-[#FFA040] transition-colors duration-300 drop-shadow-lg">{title}</h3>
                <p className="text-[#E5E7EB]/80 font-medium tracking-wide uppercase text-sm drop-shadow-md">{count} Projects</p>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    // 6 Existing Clone Projects
    const cloneProjects = [
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

    // 3 Full-Stack Projects
    const fullStackProjects = [
        {
            title: "FreelanceX",
            description: "Currency intelligence platform for freelancers that helps maximize earnings when working with international clients.",
            image: "https://res.cloudinary.com/dbknqb3e7/image/upload/v1774776462/Screenshot_2026-03-29_145714_rby4a2.png",
            github: "https://github.com/Nitishkumar0517768/freelanceX",
            demo: "https://freelance-x-liard.vercel.app/",
        },
        {
            title: "System Architecture",
            description: "Immersive, scroll-driven storytelling experience (“SYS.ARCH”) that visually explores internal computer architecture (CPU, GPU, etc.) using synchronized canvas animations and GSAP ScrollTrigger for a cinematic experience.",
            image: "https://res.cloudinary.com/dbknqb3e7/image/upload/v1774776488/Screenshot_2026-03-28_103642_ngqycp.png",
            github: "https://github.com/Nitishkumar0517768/Inside_a_computer",
            demo: "https://inside-a-computer.vercel.app/",
        },
        {
            title: "Lost & Found",
            description: "Developed a campus-focused lost and found platform enabling users to post, search, and claim items with details like location, time, and images, streamlining item recovery.",
            image: "https://res.cloudinary.com/dbknqb3e7/image/upload/v1774776565/Screenshot_2026-03-29_145919_joxvhm.png",
            github: "https://github.com/Nitishkumar0517768/lostfound",
            demo: "https://lostfound-cg.vercel.app/",
        }
    ];

    // Navigation State: null | 'fullstack' | 'clones'
    const [activeCategory, setActiveCategory] = useState(null);

    // Get active array based on state
    const currentProjectsList = activeCategory === 'fullstack' ? fullStackProjects : cloneProjects;

    return (
        <section id="projects" className="relative py-20 bg-[#0a0a0a] min-h-screen">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FFA040]/10 text-[#FFA040] text-sm font-semibold tracking-wider mb-4 border border-[#FFA040]/20">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Featured Work</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">
                        Explore my projects divided into comprehensive Full-Stack applications and precise Frontend Clones.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {/* View 1: CATEGORY FOLDERS */}
                    {activeCategory === null && (
                        <motion.div 
                            key="categories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                        >
                            <CategoryCard 
                                title="Full Stack Projects" 
                                icon={FaLayerGroup} 
                                delay={0.1}
                                count={3}
                                image="https://www.sevenmentor.com/_next/image?url=https%3A%2F%2Fsevenmentor-website.s3.eu-north-1.amazonaws.com%2Fuploads%2Fgallery%2Fstep-by-step-guide-to-build-a-full-stack-project-1764145651992.webp&w=1920&q=75"
                                onClick={() => setActiveCategory('fullstack')} 
                            />
                            <CategoryCard 
                                title="Clone Projects" 
                                icon={FaClone} 
                                delay={0.2}
                                count={6}
                                image="https://user-images.githubusercontent.com/48913536/199025849-6e3fdfd5-3f45-463e-b7ea-71c22f42134d.png"
                                onClick={() => setActiveCategory('clones')} 
                            />
                        </motion.div>
                    )}

                    {/* View 2: PROJECT LISTS */}
                    {activeCategory !== null && (
                        <motion.div 
                            key="project-grid"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6 border-b border-[#FFA040]/10 pb-6">
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E5E7EB] to-[#FFA040]">
                                    {activeCategory === 'fullstack' ? 'Full Stack Projects' : 'Clone Projects'}
                                </h3>
                                <button
                                    onClick={() => setActiveCategory(null)}
                                    className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#E5E7EB] font-medium border border-[#E5E7EB]/20 rounded-full hover:border-[#FFA040] hover:text-[#FFA040] transition-colors duration-300"
                                >
                                    <FaArrowLeft size={14} /> Go Back
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentProjectsList.map((project, index) => (
                                    <ProjectCard
                                        key={`${activeCategory}-project-${index}`}
                                        index={index}
                                        {...project}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Projects;
