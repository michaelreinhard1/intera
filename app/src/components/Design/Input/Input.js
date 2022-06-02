import "./Input.css";

const Input = ({ type, name, placeholder, value, onChange, className, disabled = false }) => {
  return (
    <input
      className={`border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full ${className}`}
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