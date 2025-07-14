import { ProfileData } from "../data/profileData";
import { ProfileCard } from "../components/ProfileCard";

const Profiles = () => {
  return (
    <section id="profiles" className="py-10 bg-black">
      <h1 className="text-white text-4xl font-bold font-titillium text-center mb-10">
        Competitive Profiles & Highlights
      </h1>
      <div className="flex flex-wrap justify-center">
        {ProfileData.map((profile, idx) => (
          <ProfileCard key={idx} details={profile} />
        ))}
      </div>
    </section>
  );
};

export default Profiles;
