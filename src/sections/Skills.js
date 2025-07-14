import { Data } from "../data/skills";
import { SkillCard } from "../components/skillcard";
import { Slide } from "react-awesome-reveal";
// import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div class="bg-black h-full font-titillium pt-12 scroll-smooth">
      <div class="pt-10 text-6xl font-titillium font-bold flex justify-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
          SKILLS
        </span>
      </div>

      <div class="lg:mx-20 sm:mx-4 my-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 pt-12 animate-fade-up animate-once animate-duration-1000 animate-delay-0 animate-ease-in">
        <Slide direction="up" triggerOnce>
          {Data.map((skill, index) => {
            return <SkillCard details={skill} key={index} />;
          })}
        </Slide>
      </div>
    </div>
  );
}
