import { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "components/Button/Button";
import {
    Lesson11Wrapper,
    ActionBlock,
    ContentBlock,
    ErrorBlock,
    SpinnerBlock,
} from "./styles";
import Image from "components/Image/Image";

function Lesson11() {
    const [imgUrl, setImgUrl] = useState<string[]>([]);
    const [error, setError] = useState<undefined | string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const url = "https://dog.ceo/api/breeds/image/random";

    const featchImgData = async () => {
        setIsLoading(true);
        setError(undefined);
        try {
            const result = await axios.get(url);
            const imgData = result.data.message;
            setImgUrl([...imgUrl, imgData]);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        featchImgData();
    }, []);

    const showMoreImage = () => {
        featchImgData();
    };

    const clearImgData = () => {
        setImgUrl([]);
    };

    return (
        <Lesson11Wrapper>
            <ActionBlock>
                <SpinnerBlock isLoading={isLoading}></SpinnerBlock>
                <Button
                    name="GET MORE IMAGES"
                    onClick={showMoreImage}
                    disabled={isLoading}
                ></Button>
            </ActionBlock>
            {error && <ErrorBlock>{error}</ErrorBlock>}
            <ContentBlock>
                {imgUrl.map((img) => {
                    return <Image key={v4()} src={img} />;
                })}
            </ContentBlock>
            {imgUrl.length !== 0 ? (
                <ActionBlock>
                    <SpinnerBlock isLoading={isLoading}></SpinnerBlock>
                    <Button
                        name="DELETE ALL DATA"
                        onClick={clearImgData}
                        isDanger={true}
                        disabled={isLoading}
                    ></Button>
                </ActionBlock>
            ) : (
                ""
            )}
        </Lesson11Wrapper>
    );
}

export default Lesson11;
