import React from "react";
import Image from "next/image";

function Topbar() {
    return (
        <nav className="relative top-0 w-full z-20 p-10">
            <div className="flex justify-between items-center">
                <div className="text-4xl font-bold font-primary text-white">IEEE SB MITS</div>
                <div className="hidden md:flex space-x-8"></div>
                <div className="flex items-center font-primary text-white opacity-80 text-4xl ">
                    menu<Image src="icons/menu.svg" alt="menu" width={45} height={45} className="" />
                </div>
            </div>
        </nav>
    );
}

export default Topbar;
