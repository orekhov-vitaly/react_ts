import { useNavigate } from "react-router-dom";
import {
    LayoutComponent,
    Header,
    Main,
    Footer,
    Logo,
    NavContainer,
    HeaderLogoWrapper,
} from "./styles";
import type { LayoutProps, NavLink } from "./types";
import Button from "components/Button/Button";
import { navLinksData } from "./data";
import NavigationLink from "components/NavigationLink/NavigationLink";
import { v4 } from "uuid";

function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();

    const navLinks = navLinksData.map(({ path, name }: NavLink) => {
        return <NavigationLink key={v4()} path={path} name={name} />;
    });

    const goToAboutPage = () => {
        navigate("/");
    };

    const goToPreviousPage = () => {
        navigate(-1);
    };

    return (
        <LayoutComponent>
            <Header>
                <HeaderLogoWrapper>
                    <Logo onClick={goToAboutPage}></Logo>
                    <Button name="<" onClick={goToPreviousPage} />
                </HeaderLogoWrapper>
                <NavContainer>{navLinks}</NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <Logo onClick={goToAboutPage}></Logo>
            </Footer>
        </LayoutComponent>
    );
}

export default Layout;
