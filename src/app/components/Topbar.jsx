import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

function Topbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsNavbarOpen(true);
    };

    const handleCloseNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <>
            <div className="absolute top-0 w-full z-30 p-10 bg-transparent">
                <div className="flex justify-between items-center ">
                    <div className="text-4xl font-bold font-primary  text-white">IEEE SB MITS</div>
                    <div className="hidden md:flex space-x-8"></div>
                    <button 
                        onClick={handleMenuClick}
                        className="flex items-center font-primary text-white opacity-80 text-4xl hover:opacity-100 transition-opacity"
                    >
                        menu<Image src="icons/menu.svg" alt="menu" width={45} height={45} className="" />
                    </button>
                </div>
            </div>
            <Navbar isOpen={isNavbarOpen} onClose={handleCloseNavbar} />
        </>
    );
}

export default Topbar;