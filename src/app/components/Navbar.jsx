import React from "react";
import Image from "next/image";

function Navbar({ isOpen, onClose }) {
    if (!isOpen) return null;

    const navigationItems = [
        { title: "Who we are", href: "#about" },
        { title: "Events", href: "#events" },
        { title: "Achievements", href: "#awards" },
        { title: "Say hello", href: "#contact" },
    ];

    const socialIcons = [
        { src: "icons/insta.svg", alt: "Instagram" },
        { src: "icons/twitter.svg", alt: "Twitter" },
        { src: "icons/twitch.svg", alt: "Twitch" },
        { src: "icons/linkedin.svg", alt: "LinkedIn" },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex">
            <div className="absolute top-0 w-full z-30 p-10 bg-transparent">
                    <div className="flex justify-between items-center ">
                        <div className="text-4xl font-bold font-primary  text-white">IEEE SB MITS</div>
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-white text-3xl hover:text-gray-light font-bold opacity-80 flex items-center gap-2"
                        >
                            close
                            <Image src="icons/menu.svg" alt="close" width={30} height={30} className="" />
                        </button>
                    </div>
                </div>
            <div className="flex-1 p-10 flex flex-col justify-center">
                <nav className="flex flex-col gap-20 space-y-8">
                    {navigationItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block text-white text-5xl font-bold hover:text-gray-light transition-colors"
                            onClick={onClose}
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex-1 p-10 flex flex-col justify-center">
                

                <div className="gap-20 flex flex-col items-start">
                    <div>
                        <h3 className="text-gray-light text-3xl font-bold mb-4">E-MAIL US</h3>
                        <a href="mailto:ieeesb@mgits.ac.in" className="text-white text-4xl">
                            ieeesb@mgits.ac.in
                        </a>
                    </div>

                    <div>
                        <h3 className="text-gray-light text-3xl font-bold mb-4">CHAT WITH US</h3>
                        <a href="tel:+91XXX-XXX-XXXX" className="text-white text-4xl">
                            +91 XXX-XXX-XXXX
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-gray-light text-3xl font-bold mb-4 ">CONNECT WITH US</h3>
                        <div className="flex gap-10 justify-start">
                            {socialIcons.map((icon, index) => (
                                <Image
                                    key={index}
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                    className="text-white hover:opacity-70 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
