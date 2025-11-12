import { useState, type ChangeEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { FormWrapper, ResultBlock, ResultWrapper } from "./styles";

function Homework09() {
    const [userName, setUserName] = useState<string>("");
    const [userAge, setUserAge] = useState<string>("");

    const [resultName, setResultName] = useState<string>("");
    const [resultAge, setResultAge] = useState<string>("");

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        setUserAge(event.target.value);
    };

    const showResult = () => {
        setResultName(userName);
        setResultAge(userAge);
    };

    return (
        <FormWrapper>
            <Input
                name="user_name"
                id="user_name"
                label="Name"
                placeholder="Enter your name"
                value={userName}
                onChange={onChangeName}
            />
            <Input
                type="number"
                name="user_age"
                id="user_age"
                label="Age"
                placeholder="Enter your age"
                value={userAge}
                onChange={onChangeAge}
            />
            <Button name="Get result" onClick={showResult} />
            <ResultWrapper>
                <ResultBlock>Name: {resultName ? resultName : "--"}</ResultBlock>
                <ResultBlock>Age: {resultAge ? resultAge : "--"}</ResultBlock>
            </ResultWrapper>
        </FormWrapper>
    );
}

export default Homework09;
