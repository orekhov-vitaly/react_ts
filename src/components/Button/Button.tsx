import "./styles.css";
import type {ButtonProps} from "./types";

// interface ButtonProps {
//     type: "button" | "submit" | "reset";
//     name: string;
//     disabled: boolean;
//     onClick?: () => void;
// }

function Button({
    type = "button",
    name,
    disabled = false,
    onClick,
}: ButtonProps) {
    return (
        <button
            className="button"
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default Button;
