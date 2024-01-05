export interface Project {
    title: string;
    thumbnail: string;
    description: string;
    date: string;
    technologies: string[];
    repository: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Around the Block",
        thumbnail: "path",
        description: "A website to help artists struggling with creative block by providing them with fresh challenges and inspiration from a community of creatives.",
        date: "April 2023",
        technologies: ["Angular", "TypeScript", "HTML/CSS", "Python", "FastAPI", "Figma"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "Around the Block",
        thumbnail: "path",
        description: "A website to help artists struggling with creative block by providing them with fresh challenges and inspiration from a community of creatives.",
        date: "April 2023",
        technologies: ["Angular", "TypeScript", "HTML/CSS", "Python", "FastAPI", "Figma"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
]