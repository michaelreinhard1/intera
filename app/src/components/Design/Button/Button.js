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
        className={`hidden lg:inline-block py-2 px-6 font-bold rounded-xl transition duration-200 lg:ml-auto
        ${ color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : null}
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
      className={`hidden lg:inline-block py-2 px-6 font-bold rounded-xl transition duration-200 lg:ml-auto
      ${ color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : null}
      ${ color === "secondary" ? "bg-gray-50 hover:bg-gray-100 text-gray-900" : null}
      ${className}`}
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