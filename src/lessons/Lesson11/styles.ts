import styled from "@emotion/styled";

interface SpinnerStyleProps {
    isLoading?: boolean;
}

export const Lesson11Wrapper = styled.div`
    width: 100%;
    background: #d5e8ebff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px;
`;

export const ActionBlock = styled.div`
    position: relative;
    flex-grow: 0;
`;

export const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #fff;
    overflow-y: auto;
    padding: 30px;
    width: 300px;
    max-height: 700px;
    border: 2px solid #48a4faff;
    border-radius: 10px;

    & > img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

export const ErrorBlock = styled.div`
    font-size: 28px;
    color: red;
`;

export const SpinnerBlock = styled.div<SpinnerStyleProps>`
    position: absolute;
    display: ${({ isLoading }) => (isLoading ? "block" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #91919179;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 50%;
        border: 4px solid #0044ff;
        border-color: #0ad303ff #0ad303ff #0ad303ff #fff;
        border-radius: 50%;
        animation: rotate .2s linear infinite;

        @keyframes rotate {
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    }
`;

export const ImageBlock = styled.div`
    position: relative;
    width: 100%;

    & > img {
        width: 100%;
    }
`;

export const DeleteButton = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    display: block;
    width: 31px;
    height: 31px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 21px;
        height: 1px;
        background: #000;
        transform: rotate(45deg) translate(-51%, -50%);
        transform-origin: 0% 50%;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 21px;
        height: 1px;
        background: #000;
        transform: rotate(-45deg) translate(-49%, -50%);
        transform-origin: 0% 50%;
    }
`;