// Шаг 1. Импорт Хука
import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Counter() {
    // Шаг 2. Вызов Хука
    // В вызов Хука необходимо передать значение по умолчанию (любой тип данных)
    // Вызов Хука возвращает массив из двух элементов
    // 1-й - значение (актуальное) стейта
    // 2-й - это функция, которая может изменить стейт (так как только она может изменить стейт)
    const [counter, setCounter] = useState(0);

    // Шаг 3. Создаём функции, которые будем передавать кнопкам, а внутри этих функций мы должны вызывать функцию setCounter, в которой пропишем логику изменения состояния

    const onMinusClick = ()=>{
        // Мы можем использовать функцию setCounter двумя способами
        // 1. Просто передавая новое значение (если новое значение не зависит от предыдущего)
        // 2. Передавать функцию callback, внутри которой мы можем получить предыдущее состояние и изменить его
        setCounter((prevState) => --prevState);
    };

    const onPlusClick = () => {
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