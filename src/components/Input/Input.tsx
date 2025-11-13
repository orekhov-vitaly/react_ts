import type { InputProps } from "./types";
import { FormGroup, LabelControl, InputElement, ErrorMessage } from "./styles";

function Input({
    name,
    type = "text",
    id,
    placeholder,
    label,
    required = false,
    disabled = false,
    value,
    error,
    onChange,
}: InputProps) {
    return (
        <FormGroup>
            {label && (
                <LabelControl htmlFor={id} className="lable-control">
                    {label}
                </LabelControl>
            )}
            <InputElement
                type={type}
                name={name}
                id={id}
                className="form-control"
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                value={value}
                onChange={onChange}
            />
            <ErrorMessage>{error}</ErrorMessage>
        </FormGroup>
    );
}

export default Input;
