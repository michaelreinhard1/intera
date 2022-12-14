import PropTypes from "prop-types";

const Select = ({ name, options = [], onChange, value, error, disabled }) => {
    return (
        <>
            <select
                className={`form-control border py-3 mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full ${error ? "is-invalid" : ""}`}
                name={name}
                disabled={disabled}
                value={String(value) || ""}
                onChange={onChange}>
                <option value={null}>--</option>
                {options &&
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="text-red-500">{error}</div>}
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