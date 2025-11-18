import styled from "@emotion/styled";

interface ButtonStyledProps {
    isDanger?: boolean;
}

export const ButtonComponent = styled.button<ButtonStyledProps>`
    width: 100%;
    padding: 10px 30px;
    margin: 0 0 30px;
    background: ${({ isDanger }) => (isDanger ? "#f5381fff" : "#1f27f5")};
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:not(:disabled):hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.6;
        pointer-events: none;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;
