import { useNavigate } from "react-router-dom";
import {
    LayoutComponent,
    Header,
    Main,
    Footer,
    Logo,
    NavContainer,
    SytyledNavLink,
} from "./styles";
import type { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate("/");
    };
    return (
        <LayoutComponent>
            <Header>
                <Logo onClick={goToAboutPage} ></Logo>
                <NavContainer>
                    <SytyledNavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                    >
                        Home
                    </SytyledNavLink>
                    <SytyledNavLink
                        to="/about"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                    >
                        About
                    </SytyledNavLink>
                    <SytyledNavLink
                        to="/users"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                    >
                        Users
                    </SytyledNavLink>
                    <SytyledNavLink
                        to="/clients"
                        style={({ isActive }) => ({
                            textDecoration: isActive ? "underline" : "none",
                        })}
                    >
                        Clients
                    </SytyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <Logo onClick={goToAboutPage} ></Logo>
            </Footer>
        </LayoutComponent>
    );
}

export default Layout;
