import Topbar from "../Topbar";

export default function Home() {
    return (
        <div className="h-screen bg-red-500 relative">
            <Topbar />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white">HOME SECTION</h1>
                    <p className="text-2xl text-white mt-4">Red Background</p>
                </div>
            </div>
        </div>
    );
}
