export const ProjectCard = (props) => {
  const { name, desc, image, link } = props.details;

  return (
    <div className="bg-black flex flex-col justify-center items-center mx-4 my-4">
      <div className="border-2 border-[#8e3eb3]/[0.2] rounded-lg w-84 my-18 h-128 lg:h-128 shadow-md transition duration-100 ease-in-out transform hover:shadow-purple-600 hover:scale-105">
        <div className="flex justify-center">
          <img
            className="h-48 w-84 object-cover rounded-t-lg opacity-70"
            src={image}
            alt={name}
          />
        </div>
        <div className="text-[#d0aedf] font-titillium font-medium text-3xl text-center my-4">
          {name}
        </div>
        <p className="text-white font-titillium text-lg text-center mx-6 mb-4">
          {desc}
        </p>
        <div className="flex justify-center border-purple-700">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              className="my-4 h-10 w-10 border-purple-700"
              src="https://img.icons8.com/glyph-neue/64/9F6BB7/link.png"
              alt="github"
            />
          </a>
        </div>
        \{" "}
      </div>
    </div>
  );
};
