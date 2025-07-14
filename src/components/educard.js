// import Slide from "react-reveal/Slide";
export const EduCard = (props) => {
  const { name, edu, date, res } = props.details;
  return (
    <div class="w-15% s:h-auto lg:h-40 pb-5 transition duration-100 ease-in-out transform hover:bg-[#8e3eb3]/[0.5] hover:scale-105 hover:rounded-sm">
      <div class="font-regular font-gilmer text-[#d0aedf] text-2xl text-center mx-4 pt-4 ">
        {name}
      </div>
      <p class="text-white text-lg text-center mx-16 font-light">{edu}</p>
      <p class="text-white text-lg text-center mx-16 font-extralight">{date}</p>
      {/* <p class="text-white text-lg text-center mx-16">{res}</p> */}
    </div>
  );
};
