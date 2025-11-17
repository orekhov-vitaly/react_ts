import { Link } from "react-router-dom";
import { ClientPage, Title, CompanyDescription } from "./styles";

function Linkedin() {
    return (
        <ClientPage>
            <Title>LinkedIn</Title>
            <CompanyDescription>
                LinkedIn (ˈlɪŋktˈɪn) — американская социальная сеть для поиска и
                установления деловых контактов. В LinkedIn зарегистрирован 1
                млрд пользователей (по состоянию на ноябрь 2023 года),
                представляющих 150 отраслей бизнеса из 200 стран.
            </CompanyDescription>
            <Link to="https://www.linkedin.com/" target="_blank">
                Site LinkedIn
            </Link>
        </ClientPage>
    );
}

export default Linkedin;
