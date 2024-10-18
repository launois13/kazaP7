import BannerApropos from "../components/BannerApropos";
import Colapsis from "../components/Colapsis";
import colapsJson from "../data/colaps.json";

const About = () => {
  return (
    <div className="about">
      <BannerApropos />
      {colapsJson.map((colaps, index) => (
        <Colapsis key={index} title={colaps.title}>
          {colaps.text}
        </Colapsis>
      ))}
    </div>
  );
};

export default About;