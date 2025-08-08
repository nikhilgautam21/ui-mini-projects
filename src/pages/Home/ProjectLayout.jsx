import { ChevronLeft } from "react-feather";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProjectLayout() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center gap-2 px-4 py-3 shadow-md">
                <button
                    onClick={() => navigate(-1)}
                    className="flex flex-row items-center text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer"
                >
                    <ChevronLeft size={24} />
                    <span className="text-lg font-medium">Back</span>
                </button>
               
            </div>

            {/* Outlet area (takes full space below bar) */}
            <div className="flex overflow-auto p-6 justify-center items-center">
                <Outlet />
            </div>
        </div>
    );
}