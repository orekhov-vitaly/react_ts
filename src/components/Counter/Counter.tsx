import { useState } from "react";

import "./styles.css";
import Button from "components/Button/Button";

function Counter() {
    const [counter, setCounter] = useState<number>(0);

    const onMinusClick = (): void => {
        setCounter((prevState) => --prevState);
    };

    const onPlusClick = (): void => {
        setCounter((prevState) => ++prevState);
    };

    return (
        <div className="counter-wrapper">
            <Button name="-" onClick={onMinusClick} />
            <div className="result-container">{counter}</div>
            <Button name="+" onClick={onPlusClick} />
        </div>
    );
}

export default Counter;
