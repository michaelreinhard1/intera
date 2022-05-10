import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({
  className,
  color = "primary",
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
        className={`btn btn--${color} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn--${color} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;