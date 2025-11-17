import styled from "@emotion/styled";

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

export const LabelControl = styled.label`
    font-size: 16px;
    line-height: 1.5;
    color: #6f6f6f;

    &[required]::after {
        content: " *";
        color: rgb(255, 0, 0);
    }
`;

export const InputElement = styled.input`
    padding: 11px 12px;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #3f3f3f;
    border-radius: 4px;
    background: #fff;
    color: #1e1e1e;
    outline: outset 0 rgba(0, 0, 0, 0.3);
    transition: all 0.2s;

    &:focus-visible {
        border-color: rgb(74, 145, 226);
        outline: outset 3px rgba(74, 145, 226, 0.3);
    }

    &::placeholder {
        color: rgba(30, 30, 30, 0.4);
    }
`;

export const ErrorMessage = styled.div`
    min-height: 18px;
    color: red;
    font-size: 16px;
`;