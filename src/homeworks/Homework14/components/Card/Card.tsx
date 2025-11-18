import { useContext } from "react";
import Message from "../Message/Message";
import { CardWrapper, Title, AthorName } from "./styles";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Card() {
    const {data} = useContext(BlogManagementContext);
    return <CardWrapper>
        <Title>Card</Title>
        <AthorName>Author: {data?.authorName} {data?.authorSurname}</AthorName>
        <Message />
    </CardWrapper>;
}

export default Card;
