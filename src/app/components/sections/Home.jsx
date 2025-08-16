import Topbar from "../Topbar";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className="h-screen bg-black relative overflow-hidden">
            <Topbar />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#353535] absolute top-1/4 right-1/4 w-[500px] h-[300px] rounded-lg shadow-md"></div>
                <div className="bg-[#5d5d5d] absolute bottom-1/4 left-1/4 w-[500px] h-[300px] rounded-lg shadow-md"></div>

                <div className="text-center w-full rotate-[-10deg]">
                    <div className="whitespace-nowrap">
                        <span className={`${styles.animateSlide} opacity-80 text-9xl font-bold text-white inline-block`}>
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                        <span className={`${styles.animateSlide} opacity-80 text-9xl font-bold text-white inline-block`}>
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                    </div>
                    <div className="whitespace-nowrap">
                        <span className={`${styles.animateSlideDelayed} opacity-80 text-9xl font-bold text-white inline-block`}>
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                        <span className={`${styles.animateSlideDelayed} opacity-80 text-9xl font-bold text-white inline-block`}>
                            - - Events - - Hackathons - - Workshops - - Connections - - Happiness
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
