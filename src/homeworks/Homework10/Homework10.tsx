import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { Homework10Wrapper, FormBlock, ResultBlock } from "./styles";
import Input from "components/Input/Input";

function Homework10() {
    const [catFactInput, setCatFactInput] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    const [catFact, setCatFact] = useState<string>("");
    const [error, setError] = useState<undefined | string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFirstRender, setIsFirstRender] = useState<boolean>(false);

    const catFactInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCatFactInput(event.target.value);
        // featchCatFactData();
    };

    const inputValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const url = "https://catfact.ninja/fact";

    const featchCatFactData = async () => {
        setIsLoading(true);
        // setCatFact("");
        setError(undefined);
        try {
            const result = await axios.get(url);
            // console.log(result);
            const fact = result.data.fact;
            setCatFact(fact);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsFirstRender(true);
    }, []);

    useEffect(() => {
        if (isFirstRender && !isLoading) {
            featchCatFactData();
        }
    }, [catFactInput]);

    return (
        <Homework10Wrapper>
            <FormBlock>
                <Input
                    name="cat-fact"
                    id="cat_fact_id"
                    label="Cat fact"
                    value={catFactInput}
                    onChange={catFactInputOnChange}
                />
                <Input
                    name="input"
                    id="input_id"
                    label="Input"
                    value={inputValue}
                    onChange={inputValueOnChange}
                />
            </FormBlock>
            <ResultBlock isLoading={isLoading}>
                {error ? error : catFact}
            </ResultBlock>
        </Homework10Wrapper>
    );
}

export default Homework10;
