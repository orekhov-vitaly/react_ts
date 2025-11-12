import styled from "@emotion/styled";

interface ResultBlockStyleProps {
    isLoading?: boolean;
}

export const Homework10Wrapper = styled.div`
    width: 100%;
    background: #d5e8ebff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormBlock = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 30px;
    margin: 0 0 40px;
    border: 2px solid #9dd3f7ff;
    border-radius: 10px;
    background: #fff;
`;

export const ResultBlock = styled.div<ResultBlockStyleProps>`
    position: relative;
    width: 100%;
    font-size: 20px;
    line-height: 1.5;
    min-height: calc(64px + 3em * 1.5);
    max-width: 500px;
    padding: 30px;
    border: 2px solid #9dd3f7ff;
    border-radius: 10px;
    background: #fff;
    z-index: 100;

    &&::after {
        content: "Loading...";
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 30px;
        color: #00be0aff;
        background: #ebebebd7;
        border-radius: 10px;
        opacity: ${({isLoading}) => isLoading ? "1" : "0"};
        z-index: 200;
        transition: opacity .2s;
        
    }
`;