import "./Input.css";

const Input = ({ type, name, placeholder, value, onChange, className, disabled = false }) => {
  return (
    <input
      className={`Input h-10 ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;