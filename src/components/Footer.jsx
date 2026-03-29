import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#050505] border-t border-[#FFA040]/10 text-center">
            <p className="text-[#E5E7EB]/60 text-sm">
                &copy; {new Date().getFullYear()} Nitish Kumar. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
