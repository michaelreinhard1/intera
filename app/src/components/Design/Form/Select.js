import PropTypes from "prop-types";

const Select = ({ name, options = [], onChange, value, error, disabled }) => {
    return (
        <>
            <select
                className={`form-control border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full ${error ? "is-invalid" : ""}`}
                name={name}
                disabled={disabled}
                value={String(value) || ""}
                onChange={onChange}>
                {options &&
                    options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            label: PropTypes.string,
        })
    ),
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Select;