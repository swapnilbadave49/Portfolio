import Img from "../Images/bg.png"
import { Slide } from "react-awesome-reveal";

export default function About()
{
 return (
   <div class="bg-black lg:pt-24 scroll-smooth ">
     <div class="py-10 text-6xl font-titillium font-bold flex justify-center">
       <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
         ABOUT ME
       </span>
     </div>

     <div class=" text-white text-center flex justify-center sm:mx-16 lg:mx-28">
       <p class="flex justify-center font-titillium lg:text-2xl sm:text-lg lg:px-32 sm:px-16">
       Hello, I'm Swapnil Badave, a final-year undergraduate student pursuing a degree in Information Technology at SCTR's Pune Institute of Computer Technology. I'm deeply passionate about full-stack web development and competitive programming. With a strong foundation in data structures, algorithms, and modern web technologies, I enjoy building scalable applications that solve real-world problems.

Over the course of my academic journey, I’ve worked on impactful projects like JobHive, a full-stack job portal, and MailMind, an AI-powered email assistant using the Google Gemini API. These experiences have strengthened my backend expertise with Node.js and Spring Boot, and frontend skills using React, TypeScript, and Tailwind CSS.

I'm a curious learner who loves problem-solving—evident from my journey as a Codeforces Specialist, and my LeetCode Biweekly ranking of 742. I’m always eager to learn new technologies, embrace challenges, and contribute meaningfully to the tech ecosystem.
<br></br>
<br></br>When I’m not coding, you’ll find me immersed in cricket, listening to music, or exploring new tech trends on GitHub.:)
         {/* <br></br> Let's connect and share our journeys! */}
       </p>
     </div>
     <div class="flex justify-center">
       <Slide direction="up" triggerOnce>
         <img class="h-auto w-full" src={Img} alt="Pic" />
       </Slide>
     </div>
   </div>
 );
};