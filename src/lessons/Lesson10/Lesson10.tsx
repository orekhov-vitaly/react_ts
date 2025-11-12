import { useState, type ChangeEvent, useEffect } from "react";
import axios from "axios";

import { Lesson10Wrapper, InputsWrapper, Result } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Lesson10() {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");

    // ---------------------
    const [joke, setJoke] = useState<string>("");
    const [error, setError] = useState<undefined | string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
    };

    console.log("Conponent Lesson10 rerender");

    // useEffect при монтировании компонента (первый рендер)
    // Чтобв функция (1-й аргумент) выполнилась только один раз (то есть при первом рендере), нужно передать пустой массив зависимости
    useEffect(() => {
        console.log("Mounting");
    }, []);

    // useEffect при обновлении компонента (повторные рендеры)
    // Чтобы функция (1-й аргумент) выполнялась каждый раз при изменении определенного значения (состояния) первого инпута, тогда во второй аргумент (массив зависимостей) нужно добавить соответствующую переменную
    useEffect(() => {
        console.log("First input update");
    }, [userName]);

    // useEffect при размонтировании компонента
    // Чтобы ПЕРЕД размонтированием компонента выполнилось какое-то действие, это действие нужно прописать внутри функции, которая будет возвращаться из первого аргумента useEffect. При этом массив зависимостей передаем пустым
    useEffect(() => {
        return () => {
            console.log("Unmouting");
        };
    }, []);

    // -------------------------
    const featchJokeData = async () => {
        setJoke("");
        setError(undefined);
        try {
            const result = await axios.get(
                "https://official-joke-api.appspot.com/random_joke"
            );
            console.log(result);
            const data = result.data;
            setJoke(`${data.setup} - ${data.punchline}`);
        } catch (error: any) {
            setError(error.message);
        } finally {
        }
    };

    useEffect(() => {
        featchJokeData();
    }, []);

    useEffect(() => {
        featchJokeData();
    }, [userName]);

    return (
        <Lesson10Wrapper>
            <InputsWrapper>
                <Input
                    name="user_name"
                    label="User name"
                    id="user_name"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={onChangeName}
                />
                <Input
                    name="user_email"
                    label="User email"
                    id="user_email"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={onChangeEmail}
                />
                <Button name="GET RESULT" onClick={featchJokeData} />
            </InputsWrapper>
            <Result>{error ? error : joke}</Result>
        </Lesson10Wrapper>
    );
}

export default Lesson10;
