import { useContext } from "react";
import { ContentComponent, DataItem } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";
import Button from "components/Button/Button";

function Content() {
    // Шаг 3 - Получаем данные из контекта с помощью useContext
    // const userData = useContext(MainCardContext);
    const {data, onDataChange} = useContext(MainCardContext);
    return (
        <ContentComponent>
            <DataItem>First Name: {data?.firstName}</DataItem>
            <DataItem>Last Name: {data?.lastName}</DataItem>
            <DataItem>Age: {data?.age}</DataItem>
            <Button name="Delete data" onClick={()=>{onDataChange(undefined)}} />
        </ContentComponent>
    );
}

export default Content;
