import "./styles.css";

function Input({ name, type, id, placeholder, label, required=false, disabled=false }) {
    return (
        <div className="form-group">
            <label
                htmlFor={id}
                className="lable-control"
                required={required}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className="form-control"
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
        </div>
    );
}

export default Input;
