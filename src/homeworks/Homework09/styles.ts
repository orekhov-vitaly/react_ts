import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    max-width: 400px;
    align-self: center;
`;

export const ResultWrapper = styled.div`
    padding: 20px;
    border: 2px solid #395dffff;
    border-radius: 6px;
`;

export const ResultBlock = styled.p`
    margin: 0 0 20px;

    &:last-child {
        margin-bottom: 0;
    }
`;