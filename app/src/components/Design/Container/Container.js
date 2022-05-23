import "./Container.css";

const Container = ({ children, className }) => {
  // if there is a classname
  if (className) {
    return <div className={`container ${className}`}>{children}</div>;
  } else {
    return <div className="container">{children}</div>;
  }
};

export default Container;