import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../constants";
import { FaAward, FaTimes, FaEye } from 'react-icons/fa';
import BackgroundBlobs from './BackgroundBlobs';

const CertificateCard = ({ index, name, issuer, date, image, onClick }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.6,
            delay: index * 0.15,
        }}
        className="w-full flex"
    >
        <div
            className="group relative w-full flex flex-col bg-[#0a1814] rounded-2xl overflow-hidden border border-[#10B981]/10 shadow-lg hover:border-[#10B981]/30 hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            {/* Certificate Image */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B1F1A]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 bg-[#10B981]/20 text-[#10B981] px-4 py-2 rounded-lg border border-[#10B981]/30 backdrop-blur-sm">
                        <FaEye /> View Certificate
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] shadow-lg backdrop-blur-md">
                    <FaAward size={20} />
                </div>

                <h3 className="text-xl font-bold text-[#E5E7EB] mb-2 mt-2 group-hover:text-[#10B981] transition-colors">{name}</h3>
                <div className="flex justify-between items-center text-sm font-medium mt-auto pt-4 border-t border-[#10B981]/10">
                    <span className="text-[#10B981]/80">{issuer}</span>
                    <span className="text-[#E5E7EB]/50">{date}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const CertificateModal = ({ certificate, onClose }) => {
    if (!certificate) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1F1A]/80 backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative w-full max-w-3xl bg-[#0a1814] rounded-2xl border border-[#10B981]/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#0B1F1A]/50 text-[#E5E7EB] hover:bg-[#10B981] hover:text-[#0B1F1A] transition-colors backdrop-blur-sm"
                        onClick={onClose}
                    >
                        <FaTimes size={18} />
                    </button>

                    <div className="w-full h-auto max-h-[60vh] overflow-hidden bg-[#000]">
                        <img src={certificate.image} alt={certificate.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{certificate.name}</h3>
                            <div className="flex items-center gap-4 text-sm font-medium">
                                <span className="text-[#10B981]">{certificate.issuer}</span>
                                <span className="text-[#E5E7EB]/50">{certificate.date}</span>
                            </div>
                        </div>

                        {certificate.link && (
                            <a
                                href={certificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg bg-[#10B981]/10 text-[#10B981] font-semibold border border-[#10B981]/20 hover:bg-[#10B981] hover:text-[#0B1F1A] transition-colors whitespace-nowrap"
                            >
                                Verify Credential
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section id="certificates" className="relative py-20 bg-[#0B1F1A]">
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
                        Achievements
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#E5E7EB] mb-4">Certifications</h2>
                    <p className="text-[#E5E7EB]/70 max-w-2xl mx-auto">Professional certifications and achievements</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={cert.name}
                            index={index}
                            {...cert}
                            onClick={() => setSelectedCertificate(cert)}
                        />
                    ))}
                </div>
            </div>

            {selectedCertificate && (
                <CertificateModal
                    certificate={selectedCertificate}
                    onClose={() => setSelectedCertificate(null)}
                />
            )}
        </section>
    );
};

export default Certificates;
