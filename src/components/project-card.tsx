import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Project } from "@/data/projects";
import { GithubIcon } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
    project: Project;
}

export interface TagProps {
    tags: string[];
}

export function Tags({tags}: TagProps) {
    return (
        <div className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag, index) => (
                <div key={`tag-${index}`} className="font-mono text-sm card">{tag}</div>
            ))}
        </div>
    )
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <>
             <Card className="flex flex-col justify-between heading border-none rounded-sm shadow-none p-2">
                <div>
                    <CardHeader className="pb-4">
                        <CardTitle className="card-heading">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 pb-4">
                        <p>{project.description}</p>
                        <Tags tags={project.technologies}></Tags>
                    </CardContent>
                </div>
                <CardFooter className="flex flex-row w-full justify-end gap-2">
                    {project.repository && <Link to={project.repository} target="_blank" rel="noopener noreferrer"><GithubIcon></GithubIcon></Link>}
                    {project.link && <Link to={project.link} target="_blank" rel="noopener noreferrer"><ExternalLinkIcon></ExternalLinkIcon></Link>}
                </CardFooter>
            </Card>
        </>
    )
}