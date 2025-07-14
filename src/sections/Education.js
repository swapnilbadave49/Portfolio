import { Edu } from "../data/eduction";
import { EduCard } from "../components/educard";
// import Slide from "react-reveal/Slide";
import Timeline from "../components/timeline";

export default function Education() {
  return (
    <div class="bg-black">
      <div class="pt-10 text-6xl font-gilmer font-semibold flex justify-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
          EDUCATION
        </span>
      </div>

      <div class=" mx-6 my-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-1 pt-12  ">
        {/* <Slide bottom> */}
          {Edu.map((edu, index) => {
            return <EduCard details={edu} key={index} />;
          })}
        {/* </Slide> */}
      </div>
    </div>
  );
}
