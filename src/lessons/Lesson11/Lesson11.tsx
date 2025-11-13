import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "components/Button/Button";
import {
    Lesson11Wrapper,
    ActionBlock,
    ContentBlock,
    ErrorBlock,
    SpinnerBlock,
    ImageBlock,
    DeleteButton,
} from "./styles";
import Image from "components/Image/Image";

function Lesson11() {
    interface IMAGE {
        id: string;
        url: string;
    }

    const [imgUrl, setImgUrl] = useState<IMAGE[]>([]);
    const [error, setError] = useState<undefined | string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const url = "https://dog.ceo/api/breeds/image/random";

    const featchImgData = async () => {
        setIsLoading(true);
        setError(undefined);
        try {
            const result = await axios.get(url);
            const imgData = result.data.message;
            setImgUrl([...imgUrl, { id: v4(), url: imgData }]);
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

    const deletImage = (imageId: string) => {
        console.log(imageId);
        
    }

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
                {imgUrl.map((imgObj) => {
                    return (
                        <ImageBlock key={v4()}>
                            <Image id={imgObj.id} src={imgObj.url} />
                            <DeleteButton data-id={imgObj.id} onClick={() => {deletImage(imgObj.id)}} />
                        </ImageBlock>
                    );
                })}
            </ContentBlock>
            {imgUrl.length !== 0 && (
                <ActionBlock>
                    <SpinnerBlock isLoading={isLoading}></SpinnerBlock>
                    <Button
                        name="DELETE ALL DATA"
                        onClick={clearImgData}
                        isDanger={true}
                        disabled={isLoading}
                    ></Button>
                </ActionBlock>
            )}
        </Lesson11Wrapper>
    );
}

export default Lesson11;
