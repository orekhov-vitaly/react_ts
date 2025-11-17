import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: #a7c7d7;
    color: #474747ff;
`;

export const Logo = styled.div`
    width: 80px;
    height: 80px;
    background: #0a2837;
    border-radius: 50%;
    cursor: pointer;
`;

export const NavContainer = styled.nav`
    display: flex;
    gap: 16px;
`;

export const SytyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    color: #0a2837;
`;

export const Main = styled.main`
    display: flex;
    flex: 1;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: #a7c7d7;
    color: #b2b7a7;
`;
