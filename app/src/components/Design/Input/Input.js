import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ type, error, name, placeholder, value, onChange, className, disabled = false }) => {
  return (
    <>
    <input
      className={`border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      />
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;