import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Homework12Wrapper = styled.div`
    ${boxBasicStyles}
    gap: 30px;
    flex: 1;
    padding: 50px;
    background: rgba(163, 177, 209, 1);
`;
