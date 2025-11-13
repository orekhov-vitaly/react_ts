import type { ChangeEvent } from "react";

export interface InputProps {
    name: string;
    type?: "text" | "password" | "email" | "tel" | "number";
    id?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    error?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
