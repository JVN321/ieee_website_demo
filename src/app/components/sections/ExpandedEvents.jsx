import { useState } from "react";
import Image from "next/image";
export default function ExpandedEvents({ onBack }) {
    const [selectedYear, setSelectedYear] = useState(2023);

    const eventsByYear = {
        2023: [
            { title: "RAZZLE DAZZLE", date: "14th feb @ 5.00pm" },
            { title: "RAZZLE DAZZLE", date: "14th feb @ 5.00pm" },
            { title: "RAZZLE DAZZLE", date: "14th feb @ 5.00pm" },
        ],
        2022: [{ title: "PEGASUS'22", date: "15th mar @ 3.00pm" }],
        2021: [{ title: "EVENT 2021", date: "10th apr @ 4.00pm" }],
        2020: [{ title: "EVENT 2020", date: "20th may @ 2.00pm" }],
        2019: [{ title: "EVENT 2019", date: "25th jun @ 6.00pm" }],
        2018: [{ title: "EVENT 2018", date: "30th jul @ 1.00pm" }],
    };

    return (
        <div className="h-screen bg-black relative p-8">
            <button
                onClick={onBack}
                className="text-white text-4xl font-bold mb-8 flex items-center hover:text-gray-light"
            >
                <Image src="icons/menu.svg" alt="menu" width={45} height={45} className="-rotate-90" />
                back
            </button>
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-9 mb-12">
                    {Object.keys(eventsByYear).map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(parseInt(year))}
                            className={`px-6 py-2 rounded-t-xl rounded-l-xl text-4xl border-white border-2 font-bold transition-colors ${
                                selectedYear === parseInt(year)
                                    ? "bg-white text-black"
                                    : "text-white hover:bg-gray-light"
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
                    <div className="bg-white w-300 h-1"></div>
                <div className="flex flex-wrap justify-center gap-6 pt-40">
                    {eventsByYear[selectedYear]?.map((event, index) => (
                        <div key={index} className="border border-gray-light rounded-lg p-9 ">
                            <h3 className=" text-3xl font-bold text-center mb-9">{event.title}</h3>
                            <p className=" text-3xl text-center">{event.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
