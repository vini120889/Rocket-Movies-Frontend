import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Header() {

    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder="Pesquisar pelo título"
            />

            <div className="profile">

                <div className="content">
                    <Link to="/profile">{user.name}</Link>
                    <button onClick={handleSignOut}>Sair</button>
                </div>

                <Link to="/profile">
                    <img src={avatarUrl} alt={user.name} />
                </Link>

            </div>

        </Container>
    )
}