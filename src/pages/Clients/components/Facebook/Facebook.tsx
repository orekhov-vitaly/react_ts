import { Link } from "react-router-dom";
import { ClientPage, Title, CompanyDescription } from "./styles";

function Facebook() {
    return (
        <ClientPage>
            <Title>Facebook</Title>
            <CompanyDescription>
                Facebook («Фе́йсбу́к») — крупнейшая социальная сеть в мире,
                которой владеет компания Meta Platforms (до 28 октября 2021 года
                — Facebook Inc.). Была основана 4 февраля 2004 года Марком
                Цукербергом и его соседями по комнате во время обучения в
                Гарвардском университете — Эдуардо Саверином, Дастином
                Московицем и Крисом Хьюзом.
            </CompanyDescription>
            <Link to="https://www.facebook.com/" target="_blank">
                Site Facebook
            </Link>
        </ClientPage>
    );
}

export default Facebook;
