export const ProfileCard = ({ details }) => {
  const { name, url, profile, subtitle, icon } = details;
  return (
    <div className="w-64 border border-purple-500/40 rounded-lg p-4 m-4 flex flex-col items-center bg-gray-900">
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <h2 className="text-white text-xl font-semibold font-titillium">{name}</h2>
      <p className="text-purple-400 text-sm text-center mt-1">{subtitle}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-sm text-blue-400 underline"
      >
        Visit Profile ↗
      </a>
    </div>
  );
};
