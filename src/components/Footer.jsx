import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#1A1A1A] border-t border-[#FFA040]/10 text-center">
            
            <p className="text-[#EAEAEA]/60 text-sm">
                &copy; {new Date().getFullYear()} Nitish Kumar. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
