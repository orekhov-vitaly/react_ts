import { SytyledNavLink } from "./styles";
import type { NavigationLinkProps } from "./types";


function NavigationLink({path, name}:NavigationLinkProps) {
    return(
        <SytyledNavLink
            to={path}
            style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
            })}
        >
            {name}
        </SytyledNavLink>
    )
}

export default NavigationLink;