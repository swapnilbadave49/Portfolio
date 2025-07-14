export const SkillCard = (props) => {
  const { name, url } = props.details;
  return (
    <div class=" w-36 h-auto my-7 rounded-md mx-auto flex flex-col items-center border border-purple-600/[0.4] ">
      <div class="w-16 mt-2 mb-2 flex-grow">
        <img src={url} alt={name} />
      </div>
      <p class=" text-white text-lg font-titillium text-center py-2">{name}</p>
    </div>
  );
};