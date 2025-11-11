// import { useState } from "react";

import { CounterWrapper, ButtonWrapper, ResultContainer } from "./styles";
import Button from "components/Button/Button";
import type { CounterProps } from "./types";

function Counter({ counter, onPlusClick, onMinusClick }: CounterProps) {
    // const [counter, setCounter] = useState<number>(0);

    // const onMinusClick = (): void => {
    //     setCounter((prevState) => --prevState);
    // };

    // const onPlusClick = (): void => {
    //     setCounter((prevState) => ++prevState);
    // };

    return (
        <CounterWrapper>
            <Button name="-" onClick={onMinusClick} isDanger />
            <ResultContainer>{counter}</ResultContainer>
            <Button name="+" onClick={onPlusClick} />
        </CounterWrapper>
    );
}

export default Counter;
