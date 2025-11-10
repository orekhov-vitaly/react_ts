import type { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

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
    isDanger,
}: ButtonProps) {
    return (
        <ButtonComponent
            type={type}
            disabled={disabled}
            onClick={onClick}
            isDanger={isDanger}
        >
            {name}
        </ButtonComponent>
    );
}

export default Button;
