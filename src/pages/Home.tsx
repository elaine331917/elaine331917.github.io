import ProjectCard from "@/components/project-card"
import { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface GridProps {
  projects: Project[]
}

function Grid({ projects }: GridProps) {
  return (
    <div className="grid my-8 mx-auto max-w-[1200] gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
        key={`prompt-${index}`}
        project={{ ...project }}
        />
      ))}
    </div>
  );
}

export default function Home() {

    return (
      <div className="page-container">
        <section className="flex flex-row items-center gap-20">
          <div className="w-60 h-60 bg-slate-500 hidden md:flex">
            image or animation here
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <div className="font-mono text-xl">Hello,</div>
              <div className="text-6xl">I'm Elaine.</div>
            </div>
            <div className="text-lg max-w-[500px]">I’m an aspiring software engineer with a passion for building intuitive and exceptional user experiences.</div>
            <div className="text-lg">Welcome to my portfolio!</div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="subtitle">
            <div className="subheading">About Me</div>
            <div className="horizontal-bar"></div>
          </div>
          <div className="my-8 mx-auto">
            <div className="flex flex-col md:flex-row">
              <div>Hi! My name is Elaine. I'm currently a senior at UNC Chapel Hill studying Computer Science and Information Science with a focus on Human-Computer Interaction.
                  <br />
                  <br />
                  Throughout my time at UNC, I've explored various full stack projects and have discovered a passion for designing and developing digital products. I’m particularly interested in frontend development, and I enjoy creating exceptional user experiences.
                  <br />
                  <br />
                  In my free time, you can find me painting, ice skating, or trying out a new restaurant :)</div>
              <div>image</div>
            </div>
          </div>
          
        </section>
        <section>
          <div className="subtitle">
            <div className="subheading">Things I've Built</div>
            <div className="horizontal-bar"></div>
          </div>
        </section>
        <section>
          <div className="subtitle">
            <div className="subheading">Other Notable Projects</div>
            <div className="horizontal-bar"></div>
          </div>
          <div>
            <Grid projects={projects.slice(3)}></Grid>
          </div>
        </section>
      </div>
    )
}