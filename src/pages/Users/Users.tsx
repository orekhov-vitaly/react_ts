import { Link, useNavigate } from "react-router-dom";
import { Title, UsersPage } from "./styles";
import Button from "components/Button/Button";

function Users() {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate("/about");
    };
    return (
        <UsersPage>
            <Title>Select user</Title>
            <Link to="/users/user">Tom Smith</Link>
            <Link to="user">Tom Smith</Link>
            <Button name="Go to About page" onClick={goToAboutPage} />
        </UsersPage>
    );
}

export default Users;
