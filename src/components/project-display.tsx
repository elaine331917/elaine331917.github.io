import { Project } from "@/data/projects";
import { GithubIcon } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Tags } from "./project-card";

interface ProjectDisplayProps {
    project: Project;
    left: boolean;
}

export function ProjectDisplay({ project, left }: ProjectDisplayProps) {
    return (
        <div className="">
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
                <div className={`flex flex-col justify-center gap-5 ${left ? 'text-left items-start' : 'text-right items-end'}`}>
                    <div>{project.title}</div>
                    <div>{project.description}</div>
                    <Tags tags={project.technologies}></Tags>
                    <div className="flex flex-row w-full justify-end gap-2">
                        {project.repository && <Link to={project.repository} target="_blank" rel="noopener noreferrer"><GithubIcon className="transform hover:scale-110 transition-transform duration-300"></GithubIcon></Link>}
                        {project.link && <Link to={project.link} target="_blank" rel="noopener noreferrer"><ExternalLinkIcon className="transform hover:scale-110 transition-transform duration-300"></ExternalLinkIcon></Link>}
                    </div>
                </div>
                <img src={project.thumbnail} className={`${left ? 'order-1' : '-order-1'}`}></img>
            </div>
        </div>
    )
}