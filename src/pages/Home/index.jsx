import { useState, useEffect } from "react";
import { Container, Header } from "./styles";
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom";
import { Movie } from "../../components/Movie";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Home() {
    const { signOut, user } = useAuth();

    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    function handleSignOut() {
        signOut();
        navigate("/");
    }

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchMovies();

    }, [search]);

    return (
        <Container>
            <Header>
                <h1>RocketMovies</h1>

                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
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

            </Header>

            <div className="wrapper">

                <div className="content">
                    <h2>Meus Filmes</h2>
                    <Link to="/new">
                        <FiPlus />
                        Adicionar filme
                    </Link>
                </div>

                <div className="movies">
                    {
                        notes &&
                        notes.map(note => (
                            <Movie
                                key={note.id}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }

                </div>


           
            </div> {/* wraper  */} 

        </Container>
    )
}