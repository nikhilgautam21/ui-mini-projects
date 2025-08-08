import {
    Card
} from "@/components/ui/card"
import * as Icons from "react-feather";
import { useNavigate } from "react-router-dom";

function ProjectCard({ name, icon, id }) {
    const IconComponent = Icons[icon] || Icons.HelpCircle;
    const navigate = useNavigate()

    const handleRouteToProject = () => {

        navigate(`project/${id}`)
    }

    return (
        <Card className="w-64 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer" onClick={handleRouteToProject}>
            <div className="flex flex-col items-center justify-center p-6">
                <IconComponent size={48} className="text-500 mb-4" />
                <p className="text-lg font-semibold text-center text-gray-800">{name}</p>
            </div>
        </Card>
    )
}

export default ProjectCard