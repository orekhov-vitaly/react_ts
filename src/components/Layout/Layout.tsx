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
    return (
        <LayoutComponent>
            <Header>
                <Logo></Logo>
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
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <Logo></Logo>
            </Footer>
        </LayoutComponent>
    );
}

export default Layout;
