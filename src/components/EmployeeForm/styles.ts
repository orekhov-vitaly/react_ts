import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
    display: flex;
    flex-direction: column;
`;

export const EmployeeFormComponent = styled.form`
    ${boxBasicStyles}
    gap: 20px;
    width: 500px;
    padding: 30px;
    background: #fff;
    border: 1px solid rgba(8, 23, 56, 1);
    border-radius: 10px;
`;

export const Title = styled.div`
    font-size: 30px;
    color: rgba(8, 23, 56, 1);
    font-weight: bold;
    text-align: center;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Checkbox = styled.input`
    width: 16px;
    height: 16px;
`;

export const CheckboxLabel = styled.label`
    font-size: 20px;
`;

export const ErrorMessage = styled.div`
    font-size: 16px;
    color: red;
`;