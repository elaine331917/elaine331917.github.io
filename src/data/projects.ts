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
        title: "Feather",
        thumbnail: "path",
        description: "An app that allows users to record birds nearby and upload them to a global feed where they can connect with a community of nature lovers and collect bird migration data for environmental scientists.",
        date: "February 2023",
        technologies: ["React Native", "SQLite"],
        repository: "https://github.com/elaine331917/feather",
        link: "https://devpost.com/software/feather-jpfhn9"
    },
    {
        title: "LLM Prompt Library",
        thumbnail: "path",
        description: "A prompt library and prompt management system to help employees utilize large language models, allowing users to vote on, sort through, and filter prompts.",
        date: "April 2023",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "DynamoDB", "AWS"],
        repository: "https://github.com/elaine331917/prompt-library",
        link: ""
    },
    {
        title: "Around the Block",
        thumbnail: "path",
        description: "A website to help artists struggling with creative block by providing them with fresh challenges and inspiration from a community of creatives.",
        date: "April 2023",
        technologies: ["Angular", "TypeScript", "HTML/CSS", "Python", "Figma"],
        repository: "https://github.com/elaine331917/aroundtheblock",
        link: "https://aroundtheblock.apps.cloudapps.unc.edu/"
    },
    {
        title: "Catch",
        thumbnail: "path",
        description: "A website for a club that modifies toys to be more accessible to disabled children.",
        date: "November 2023",
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
        title: "Kappa Theta Pi Rush",
        thumbnail: "path",
        description: "A conceptual app designed to streamline the application process of UNC's KTP chapter.",
        date: "April 2023",
        technologies: ["Figma"],
        repository: "",
        link: "https://www.figma.com/proto/h0wcicMr6EF46g9UFmmXpe/KTP-Wireframes?type=design&node-id=120-153&t=tbYDfMe0IH8NDF9N-1&scaling=scale-down&page-id=1%3A2&starting-point-node-id=222%3A916&mode=design"
    },
    {
        title: "Bloom",
        thumbnail: "path",
        description: "A task-keeping app designed to pair the user's motivation with a virtual plant to care for.",
        date: "Sept 2022",
        technologies: ["Figma"],
        repository: "",
        link: "https://www.figma.com/proto/nUtjkH8HqCVPCt125Gluhp/blooming-tasks?type=design&node-id=111-393&t=BI4kwTuoi78CJaRH-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=111%3A393&mode=design"
    },
    {
        title: "Polaris Navigation",
        thumbnail: "path",
        description: "An accessible navigation web app that provides alternative routes to those with limited mobility.",
        date: "May 2022",
        technologies: ["Angular", "HTML/CSS", "Python", "MongoDB", "Figma"],
        repository: "https://github.com/elaine331917/a99-polaris",
        link: ""
    },
    {
        title: "VR Balloon Pop",
        thumbnail: "path",
        description: "A short VR game where you pop balloons with darts.",
        date: "November 2023",
        technologies: ["Unity", "MetaQuest", "C#", "Blender"],
        repository: "https://github.com/ssompall/vr-carnival",
        link: ""
    },
]