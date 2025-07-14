export default function Navbar(){
    return (
      <nav class="bg-[#b07ac9]/[0.5]">
        <div class="h-[50px] max-w flex justify-end font-robo">
          {/* <div class="font-water brush"></div> */}
          <div class=" flex flex-row">
            <div class="pr-5 pl-5 h-[50px] flex items-center font-robo text-2xl text-black hover:text-white  hover:bg-black">
              About
            </div>
            <div class="pr-5 pl-5 h-[50px] flex items-center font-robo text-2xl text-black hover:text-white  hover:bg-black">
              Resume
            </div>
            <div class="pr-10 pl-5 h-[50px] flex items-center font-robo text-2xl text-black hover:text-white hover:bg-black ">
              Contact Me
            </div>
          </div>
        </div>
      </nav>
    );
}