// import { Fade } from "react-reveal/Fade";
import Ast from "../Images/ast.png";
import End from "../Images/7756627.png"
import { Slide } from "react-awesome-reveal";

export default function Contacts() {
    return (
      <div class="bg-black h-full lg:pt-12 scroll-smooth">
        <div class="py-10 my-5 text-6xl font-titillium font-bold flex justify-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
            CONTACT ME
          </span>
        </div>
        <div class="grid grid-cols-3">
          <div class="flex justify-center col-span-1 animate-wiggle animate-infinite">
            <img
              class="h-auto lg:w-72 sm:w-20  rounded-full"
              src={Ast}
              alt="Ast"
            />
          </div>
          <div class="flex flex-col item-center col-span-2">
            <p class="text-white lg:text-2xl sm:text-md font-titillium px-4">
              Feel free to reach out to me for collaborations, opportunities, or
              just a friendly chat!
            </p>

            <div class="flex flex-row my-3 lg:mt-10 font-titillium">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-2"
                  src="https://img.icons8.com/material-rounded/24/9F6BB7/mail.png"
                />
                <a href="mailto:swapnilbadave007@gmail.com">
                  <span class="text-[#9F6BB7] lg:text-xl sm: text-md mx-2">
                    swapnilbadave007@gmail.com
                  </span>
                </a>
              </Slide>
            </div>
            <div class="flex flex-row my-3 font-titillium">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-2 "
                  src="https://img.icons8.com/ios-filled/24/9F6BB7/linkedin.png"
                />
                <a href="https://www.linkedin.com/in/swapnil-badave-7b538925a/">
                  <span class="text-[#9F6BB7] lg:text-xl sm:text-sm mx-2">
                    Swapnil Badave
                  </span>
                </a>
              </Slide>
            </div>
            <div class="flex flex-row my-3 font-titillium">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-4"
                  src="https://img.icons8.com/ios-glyphs/24/9F6BB7/github.png"
                />
                <a href="https://github.com/swapnilbadave49">
                  <span class="text-[#9F6BB7] lg:text-xl sm:text-sm mx-2">
                    swapnilbadave49
                  </span>
                </a>
              </Slide>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <Slide direction="up" triggerOnce>
            <img class="h-auto w-full" src={End} alt="Pic" />
          </Slide>
        </div>
      </div>
    );
}