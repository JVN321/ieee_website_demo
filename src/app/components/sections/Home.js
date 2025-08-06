import Topbar from "../Topbar";

export default function Home() {
    return (
        <div className="h-screen bg-black relative overflow-hidden">
            <Topbar />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#353535] absolute top-1/4 right-1/4 w-[500px] h-[300px] rounded-lg shadow-md"></div>
                <div className="bg-[#5d5d5d] absolute bottom-1/4 left-1/4 w-[500px] h-[300px] rounded-lg shadow-md"></div>

                <div className="text-center w-full overflow-hidden rotate-[-10deg]">
                    <div className="whitespace-nowrap">
                        <span className="animate-slide opacity-80 text-9xl font-bold text-white inline-block">
                            {" "}
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                        <span className="animate-slide opacity-80 text-9xl font-bold text-white inline-block">
                            {" "}
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                    </div>
                    <div className="whitespace-nowrap">
                        <span className="animate-slide-delayed opacity-80 text-9xl font-bold text-white inline-block">
                            {" "}
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                        <span className="animate-slide-delayed opacity-80 text-9xl font-bold text-white inline-block">
                            {" "}
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                    </div>
                </div>
                <style jsx>{`
                    @keyframes slide {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(0%);
                        }
                    }
                    @keyframes slide-delayed {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                    .slide-color 
                    {
                    }
                    .animate-slide {
                        transform: translateX(100%);
                        animation: slide 10s linear infinite;
                    }
                    .animate-slide-delayed {
                        animation: slide-delayed 10s linear infinite;
                    }
                `}</style>
            </div>
        </div>
    );
}
