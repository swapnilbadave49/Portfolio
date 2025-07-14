import { Project } from "../data/projects";
import { ProjectCard } from "../components/projectcard";
import { Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div class="bg-black ">
      <div class="pt-10 text-6xl font-titillium font-bold flex justify-center ">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
          PROJECTS
        </span>
      </div>
      <div class="mx-4 my-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 pt-12 place-items-center">
        <Slide direction="up" triggerOnce>
          {Project.map((project, index) => {
            return <ProjectCard details={project} key={index} />;
          })}
        </Slide>
      </div>
    </div>
  );
}
