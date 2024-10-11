  import PropTypes from 'prop-types';

const Tags = (props) => {
    return (
        <p className="tags">{props.text}</p>
    );
};

Tags.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tags;