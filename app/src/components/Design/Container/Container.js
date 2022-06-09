import "./Container.css";
import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  if (className) {
    return <div className={`container p-4 ${className}`}>{children}</div>;
  } else {
    return <div className="container p-4">{children}</div>;
  }
};

// PropTypes
Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;