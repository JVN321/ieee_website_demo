import React from 'react';
import Image from 'next/image';
function ExpandIcon({ position = 'left', onClick, isExpanded = false }) {


    return (
        <div 
            className={`absolute bottom-32 ${position === 'left' ? 'left-15' : 'right-15'} z-[50] cursor-pointer transition-transform duration-300 ${
                isExpanded ? 'scale-110' : 'scale-100'
            } hover:scale-105`}
            onClick={onClick}
        >
            <Image src={'expand.svg'} alt="Expand Icon" width={100} height={100} />
        </div>
    );
}

export default ExpandIcon;