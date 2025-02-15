import ProjectCard from "@/components/project-card"
import { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useIsVisible } from "@/helpers/useIsVisible";
import { ProjectDisplay } from "@/components/project-display";

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

  // Section refs
  const section1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(section1)

  const section2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(section2)

  const section3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(section3)

  const section4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(section4)

    return (
      <div className="page-container">
        <section ref={section1} className={`transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-row gap-16 pt-20">
            <div className="w-60 h-60 bg-slate-500 hidden md:flex">
              image or animation here
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="font-mono text-xl accent">Hello,</div>
                <div className="text-6xl heading">I'm Elaine.</div>
              </div>
              <div className="text-lg max-w-[600px]">I’m an aspiring software engineer with a passion for building exceptional user experiences.</div>
              <Link to="/" className="max-w-max">
                <div className="custom-button text-lg">Get in touch</div>
              </Link>
            </div>
          </div>
          
        </section>
        <section ref={section2} className={`transition-opacity flex flex-col ease-in duration-500 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="subtitle">
            <div className="subheading heading">About Me</div>
            <div className="horizontal-bar"></div>
          </div>
          <div className="my-8 mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              <div>Hi! My name is Elaine. I'm currently a senior at UNC Chapel Hill studying Computer Science and Information Science with a focus on Human-Computer Interaction.
                  <br />
                  <br />
                  Throughout my time at UNC, I've explored various full stack projects and have discovered a passion for designing and developing digital products. I’m particularly interested in frontend development, and I enjoy creating exceptional user experiences.
                  <br />
                  <br />
                  In my free time, you can find me painting, ice skating, or trying out a new restaurant :)</div>
              <div className="max-w-[500px] mx-10">
                <img src='elaine.jpg' className="bg-cover"/>
              </div>
            </div>
          </div>
          
        </section>
        <section id="projects" ref={section3} className={`transition-opacity ease-in duration-500 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <div className="subtitle">
            <div className="subheading heading">Things I've Built</div>
            <div className="horizontal-bar"></div>
          </div>
          <ProjectDisplay project={projects[0]} left={true} />
          <ProjectDisplay project={projects[1]} left={false} />
          <ProjectDisplay project={projects[2]} left={true} />
        </section>

        <section ref={section4} className={`transition-opacity ease-in duration-500 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <div className="subtitle">
            <div className="subheading heading">Other Notable Projects</div>
            <div className="horizontal-bar"></div>
          </div>
          <div>
            <Grid projects={projects.slice(3)}></Grid>
          </div>
        </section>
      </div>
    )
}