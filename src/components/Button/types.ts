export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    name: string;
    disabled?: boolean;
    onClick?: () => void;
    isDanger?: boolean;
}
