import React from 'react';

const BackgroundBlobs = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#FFA040] opacity-20 blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#FFCF70] opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[50%] right-[10%] w-[200px] h-[200px] rounded-full bg-[#FFA040] opacity-15 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
    );
};

export default BackgroundBlobs;
