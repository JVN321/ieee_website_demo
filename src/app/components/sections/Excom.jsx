import { useState } from "react";
import ExpandIcon from "../Expand";
import Image from "next/image";
export default function Excom() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
        console.log("Excom ExpandIcon clicked! Expanded:", !isExpanded);
        // Add your custom logic here
    };

    return (
        <div className="h-screen bg-black relative flex items-center justify-start w-full">
            <div className="w-[200px] flex justify-center">
                <div className="flex -rotate-90  items-center">
                    <div className="bg-white w-70 h-2 mr-4"></div>
                    <div className="text-white text-8xl font-bold">
                        <span className="text-gray-light">EXE</span>COM
                    </div>
                </div>
            </div>
            <div className="text-white  flex flex-col ml-100">
                <div className="flex items-center gap-8">
                  <Image src={'icons/user.svg'} alt="User Icon" width="32" height="32" className="text-gray-light" />
                  <div>
                    <h1 className="text-7xl font-bold mb-9">AKSHAY SAJEEV</h1>
                    <p className="text-gray-light text-5xl font-bold">IEEE CHAIR</p>
                    </div>
                </div>
            </div>
            <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
        </div>
    );
}
