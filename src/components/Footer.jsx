import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#0a1814] border-t border-[#10B981]/10 text-center">
            <p className="text-[#E5E7EB]/60 text-sm">
                &copy; {new Date().getFullYear()} Nitish Kumar. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
