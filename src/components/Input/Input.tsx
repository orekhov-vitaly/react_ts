import "./styles.css";
import type { InputProps } from "./types";

function Input({
    name,
    type="text",
    id,
    placeholder,
    label,
    required = false,
    disabled = false,
}: InputProps) {
    return (
        <div className="form-group">
            {label && <label htmlFor={id} className="lable-control">{label}</label>}
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
