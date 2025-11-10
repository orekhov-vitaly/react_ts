import { useState, type ChangeEvent } from "react";

import Counter from "components/Counter/Counter";
import {
    Lesson09Wrapper,
    BoxInfo,
    AnimalBox,
    InputsWrapper,
    Result,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson09() {
    // Контролируемый компонент - компонент, значение которого мы хроним в локальном хранилище и изменяем его с помощью функции для изменения состояния. Эти значение мы передаем в атрибуты value и onChange через пропсы компонентов (Input)
    // 1 шаг - создаем state
    const [userEmail, setUserEmail] = useState<string>("");
    const [result, setResult] = useState<string>("");

    // 2 шаг - создание функции для изменения значения в инпуте. Для получения значениея, которое пользователь ввел мы будем использовать объект Event
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
    };

    const showResult = () => {
        setResult(userEmail);
    };

    // --------- Поднятие состояния ----------

    const [counter, setCounter] = useState<number>(0);

    const onMinusClick = (): void => {
        setCounter((prevState) => prevState - 5);
    };

    const onPlusClick = (): void => {
        setCounter((prevState) => prevState + 5);
    };

    return (
        <Lesson09Wrapper>
            <InputsWrapper>
                {/* Данный компонент не контролируемый, так как его изменение контролирует браузер */}
                <Input
                    name="user_name"
                    label="User name"
                    id="user_name"
                    placeholder="Enter your name"
                />
                <Input
                    name="user_email"
                    label="User email"
                    id="user_email"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={onChangeEmail}
                />
                <Button name="GET RESULT" onClick={showResult} />
                <Result>{result}</Result>
            </InputsWrapper>
            <Counter
                counter={counter}
                onMinusClick={onMinusClick}
                onPlusClick={onPlusClick}
            />
            <BoxInfo>Information</BoxInfo>
            <AnimalBox>
                <p>Animal card</p>
            </AnimalBox>
        </Lesson09Wrapper>
    );
}

export default Lesson09;
