import { useState } from "react";
import ExpandIcon from "../Expand";

export default function Events() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
        console.log("Events ExpandIcon clicked! Expanded:", !isExpanded);
    };

    const eventsData = {
        upcoming: [
            {
                title: "PEGASUS'23",
                description: "a solution based hackathon conducted by ieee",
                buttonText: "register now",
            },
        ],
        past: [
            {
                title: "PEGASUS'22",
                description: "a solution based hackathon conducted by ieee",
            },
        ],
    };

    return (
        <div className="h-screen bg-black relative flex items-center justify-start w-full">
            <div className="w-[200px] flex justify-center">
                <div className="flex -rotate-90  items-center">
                    <div className="bg-white w-70 h-2 mr-4"></div>
                    <div className="text-white text-8xl font-bold">
                        <span className="text-gray-light">EVE</span>NTS
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col gap-10 ml-100">
                <div className="mb-16">
                    <h2 className="text-7xl font-bold mb-12">Upcoming</h2>
                    {eventsData.upcoming.map((event, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-4xl font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-light mb-4 text-3xl font-bold">{event.description}</p>
                            <button className="bg-gray-light hover:opacity-80 text-3xl font-bold text-white px-6 py-2 rounded-xl transition-colors">
                                {event.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-7xl font-bold mb-12">Past Events</h2>
                    {eventsData.past.map((event, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-4xl font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-light text-3xl font-bold">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
        </div>
    );
}
