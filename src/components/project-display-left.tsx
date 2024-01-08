import { Project } from "@/data/projects";
import { GithubIcon } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Tags } from "./project-card";

interface ProjectDisplayProps {
    project: Project;
}

export function ProjectDisplayLeft({ project }: ProjectDisplayProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={project.thumbnail}></img>
            <div className="flex flex-col justify-center items-end text-right gap-5">
                <div>{project.title}</div>
                <div>{project.description}</div>
                <Tags tags={project.technologies}></Tags>
                <div className="flex flex-row w-full justify-end gap-2">
                    {project.repository && <Link to={project.repository} target="_blank" rel="noopener noreferrer"><GithubIcon></GithubIcon></Link>}
                    {project.link && <Link to={project.link} target="_blank" rel="noopener noreferrer"><ExternalLinkIcon></ExternalLinkIcon></Link>}
                </div>
            </div>
        </div>
    )
}