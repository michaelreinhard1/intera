import "./Button.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  className,
  color,
  type = "submit",
  disabled = false,
  href,
  onClick,
  children,
}) => {
  if (href) {
    return (
      <Link
        to={href}
        disabled={disabled}
        className={` lg:inline-block py-2 px-6 font-bold rounded-xl transition duration-200
        ${ color === "primary" ? "bg-blue-600 hover:bg-blue-700 text-white" : null}
        ${ color === "secondary" ? "bg-gray-50 hover:bg-gray-100 text-gray-900" : null}
        ${ color === "danger" ? "  text-red-500" : null}
        ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={` lg:inline-block py-2 px-6 font-bold rounded-xl transition duration-200
      ${ color === "primary" ? "bg-blue-600 hover:bg-blue-700 text-white" : null}
      ${ color === "secondary" ? "bg-gray-50 hover:bg-gray-100 text-gray-900" : null}
      ${ color === "danger" ? "  text-red-500" : null}
      ${className ? className : null}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

// PropTypes
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;