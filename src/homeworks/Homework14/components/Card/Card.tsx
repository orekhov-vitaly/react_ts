import Message from "../Message/Message";
import { CardWrapper, Title } from "./styles";

function Card() {
    return <CardWrapper>
        <Title>Card</Title>
        <Message />
    </CardWrapper>;
}

export default Card;
