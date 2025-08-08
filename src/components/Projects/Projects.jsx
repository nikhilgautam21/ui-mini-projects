import React from "react"
import ProjectCard from "./ProjectCard"

const projects = [{ id: 'carousel', name: 'Carousel', link: '/carousel', icon: 'Image' }]

function Projects() {
	return (
		<div className="flex p-2 justify-center">
			{
				projects.map((project) => (
					<ProjectCard name={project.name} icon={project.icon} key={project.id} id={project.id} />
				))
			}
		</div>
	)
}

export default Projects