import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import { MessageWrapper, PostData, Title } from "./styles";

function Message() {
    const {data} = useContext(BlogManagementContext);
    return (
        <MessageWrapper>
            <Title>Message</Title>
            <PostData>{data?.message}</PostData>
        </MessageWrapper>
    )
}

export default Message;