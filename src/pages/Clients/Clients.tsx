import { Link } from "react-router-dom";
import { ClientsPage, Title, ListClients, ItemClients } from "./styles";

function Clients() {
    return (
        <ClientsPage>
            <Title>Our clients</Title>
            <ListClients>
                <ItemClients>
                    <Link to="facebook">Facebook</Link>
                </ItemClients>
                <ItemClients>
                    <Link to="instagram">Instagram</Link>
                </ItemClients>
                <ItemClients>
                    <Link to="linkedin">LikedIn</Link>
                </ItemClients>
            </ListClients>
        </ClientsPage>
    );
}

export default Clients;
