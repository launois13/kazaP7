import img from '../assets/images/imgAccueil.png'
const BannerImg = () => {
  return (
    <div className="banner">
      <img src={img} alt="falaises" className="bannerImg" />
      <div className="mask"></div>
      <h1>
        <span>Chez vous, </span>
        <span>partout et ailleurs</span>
      </h1>
    </div>
  );
};
export default BannerImg;