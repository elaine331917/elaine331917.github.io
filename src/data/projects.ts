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
        technologies: ["Angular", "TypeScript", "HTML/CSS", "Python", "Figma"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "LLM Prompt Library",
        thumbnail: "path",
        description: "A prompt library and prompt management system to help employees utilize large language models, allowing users to vote on, sort through, and filter prompts.",
        date: "April 2023",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "DynamoDB", "AWS"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "Catch",
        thumbnail: "path",
        description: "A website for a club that modifies toys to be more accessible to disabled children.",
        date: "April 2023",
        technologies: ["React", "JavaScript", "HTML/CSS"],
        repository: "https://github.com/cssgunc/catch",
        link: "https://www.catch-inc.com/"
    },
    {
        title: "CSXL Workshops",
        thumbnail: "path",
        description: "A new workshops registration feature for the UNC Computer Science Experience Lab’s website.",
        date: "April 2023",
        technologies: ["Angular", "Python", "Pytest", "SQLAlchemy", "Postgres", "FastAPI"],
        repository: "https://github.com/elaine331917/csxl-workshops",
        link: ""
    },
    {
        title: "Polaris Navigation",
        thumbnail: "path",
        description: "An accessible navigation web app that provides alternative routes to those with limited mobility.",
        date: "April 2023",
        technologies: ["Angular", "HTML/CSS", "Python", "MongoDB", "Figma"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "Kappa Theta Pi Rush",
        thumbnail: "path",
        description: "A conceptual app designed to streamline the application process of UNC's KTP chapter.",
        date: "April 2023",
        technologies: ["Figma"],
        repository: "",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "Bloom",
        thumbnail: "path",
        description: "A task-keeping app designed to pair the user's motivation with a virtual plant to care for.",
        date: "April 2023",
        technologies: ["Figma"],
        repository: "",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "VR Balloon Pop",
        thumbnail: "path",
        description: "A short VR game where you pop balloons with darts.",
        date: "April 2023",
        technologies: ["Unity", "MetaQuest", "C#", "Blender"],
        repository: "https://github.com/chphoom/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
]