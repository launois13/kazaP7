import BannerApropos from "../components/BannerApropos";
import Colapsis from "../components/Colapsis";
import Footer from "../components/Footer";
import Header from "../components/Header";
const About = () => {
  return (
    <div className="about">
      <Header/>
      <BannerApropos/> 
      <Colapsis/>
      <Footer/>
    </div>
  );
};
export default About;