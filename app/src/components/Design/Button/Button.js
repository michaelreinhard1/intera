import "./Button.css";
import { Link } from "react-router-dom";

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
      ${className ? className : null}`}
      // if color = primary then bg-blue-500

      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;