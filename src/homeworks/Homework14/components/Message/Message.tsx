import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import { MessageWrapper, AthorName, PostData, Title } from "./styles";

function Message() {
    const {data} = useContext(BlogManagementContext);
    return (
        <MessageWrapper>
            <Title>Message</Title>
            <AthorName>Author: {data?.authorName} {data?.authorSurname}</AthorName>
            <PostData>{data?.message}</PostData>
        </MessageWrapper>
    )
}

export default Message;