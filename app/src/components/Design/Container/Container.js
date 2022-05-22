import "./Container.css";

const Container = ({ children, className }) => {
  // if there is a classname
  if (className) {
    return <div className={`Container ${className}`}>{children}</div>;
  } else {
    return <div className="Container">{children}</div>;
  }
};

export default Container;