import { useState } from "react";
import Image from "next/image";

export default function ExpandedExcom({ onBack }) {
    const teamMembers = [
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" },
        { name: "William Wordsmith", role: "CONTENT LEAD" }
    ];

    return (
        <div className="h-screen bg-black relative p-8 overflow-y-auto">
            <button
                onClick={onBack}
                className="text-white text-4xl font-bold mb-8 flex items-center hover:text-gray-light"
            >
                <Image src="icons/menu.svg" alt="menu" width={45} height={45} className="-rotate-90" />
                back
            </button>

            <div className="grid grid-cols-6 gap-10 p-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-white">
                        <div className="mb-4 flex items-center justify-center">
                            <Image
                                src="icons/user.svg"
                                alt="User Icon"
                                width={90}
                                height={90}
                                className="text-white"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                        <p className="text-gray-light text-xl text-center">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
