import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicCtyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Lesson09Wrapper = styled.div`
    ${boxBasicCtyles}
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    gap: 30px;
    flex: 1;
    padding: 50px;
    background: rgba(226, 235, 175, 1);
    font-size: 36px;
`;

export const BoxInfo = styled.div`
    ${boxBasicCtyles}
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    padding: 20px;
    border: 2px solid rgb(39, 4, 57);
    background: rgb(233, 175, 235);
    color: rgb(38, 6, 40);
`;

export const AnimalBox = styled.div`
    ${boxBasicCtyles}
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    padding: 30px;
    background: rgb(172, 236, 232);
    border-radius: 10px;
    font-size: 28px;

    & > p {
        text-decoration: underline;
    }
`;

export const InputsWrapper = styled.div`
    ${boxBasicCtyles}
    gap: 20px;
    width: 400px;
`;

export const Result = styled.div`
    font-size: 30px;
    color: rgba(40, 15, 86, 1);
`;