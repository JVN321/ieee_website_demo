"use client";
import { useState } from "react";
import Topbar from "./components/Topbar";
import Image from "next/image";
import ExpandIcon from "./components/Expand";
import HomeComponent from "./Home";

export default function Main() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
        console.log("Main ExpandIcon clicked! Expanded:", !isExpanded);
    };

    if (isExpanded) {
        return <HomeComponent />;
    }

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            <Image
                src="background/IEEE_background.svg"
                alt=""
                fill={true}
                className="absolute z-10 object-contain p-12"
            />
            <Topbar />
            <div className="relative z-20 h-screen flex items-center justify-between ml-20 px-12">
                <div className="text-white">
                    <h1 className="text-5xl font-bold mb-6">
                        DIGITAL <span className="text-white italic ">craftsmanship</span> SCULPTING
                    </h1>
                    <h2 className="text-5xl font-bold mb-8">YOU AS A LEADER</h2>
                    <p className="text-3xl text-gray-300 leading-relaxed max-w-3xl mt-20">
                        Platform for the young minds to explore and experiment technological advancements with
                        professional competencies following ethical standards
                    </p>
                </div>
            </div>
            <ExpandIcon position="left" onClick={handleExpandClick} isExpanded={isExpanded} />
        </div>
    );
}
