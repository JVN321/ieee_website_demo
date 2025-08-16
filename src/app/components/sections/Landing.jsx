import Topbar from "../Topbar";

export default function Landing() {
    return (
        <div>
            <Topbar />
            <div className="h-screen flex items-center justify-center bg-red-500">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white">LANDING SECTION</h1>
                    <p className="text-2xl text-white mt-4">Red Background</p>
                </div>
            </div>
        </div>
    );
}
