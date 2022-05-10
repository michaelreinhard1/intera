import "./Input.css";

const Input = ({ type, name, placeholder, value, onChange, className, disabled = false }) => {
  return (
    <input
      className={`Input ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;