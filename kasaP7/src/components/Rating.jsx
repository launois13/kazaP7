import PropTypes from "prop-types";
import starFull from "../assets/images/starFull.svg";
import starGrey from "../assets/images/starGrey.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;
  
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starGrey}
          alt={index < rating ? "étoile pleine" : "étoile vide"}
          className="star"
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
