import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Details() {
    const { user } = useAuth();
    const [movie, setMovie] = useState(null);
    const [rating, setRating] = useState(0);
    const [createdAt, setCreatedAt] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [date, time] = createdAt ? createdAt.split(" ") : ["", ""];
    const [year, month, day] = date ? date.split("-") : ["", "", ""];
    const [hour, minute, ] = time ? time.split(":") : ["", ""];
    const formattedDate = `${day}/${month}/${year} às ${String(hour - 3).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;

    async function handleDeleteMovie() {
        const confirm = window.confirm("Tem certeza que deseja excluir este filme?");
        if (confirm) {
            
            try {
                await api.delete(`/notes/${params.id}`);
                alert("Filme excluído com sucesso!");
                navigate(-1);

            } catch (error) {
                alert("Erro ao excluir filme!");
            }

        };
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/notes/${params.id}`);
            setMovie(response.data);     
            setRating(response.data.rating);
            setCreatedAt(response.data.created_at);
        }
        
        fetchMovie();
        
        
        
    }, []);
    
    return (
        <Container>
            <Header />

            {
                movie &&
                <main>
                    <Link to={-1}>
                        <FiArrowLeft />
                        Voltar
                    </Link>

                    <Content>
                        <div className="head">
                            <h2>{movie.title}</h2>
                            {
                                rating &&
                                Array.from({ length: rating }, (_, index) => (

                                    <AiFillStar 
                                        key={String(index)} 
                                    />

                                ))
                            }

                            {
                                rating &&
                                Array.from({ length: 5 - rating }, (_, index) => (

                                    <AiOutlineStar 
                                        key={String(index)} 
                                    />

                                ))
                            }
                        </div>

                        <div className="stats">
                            <img src={avatarUrl} alt="User image" />
                            <p>Por <span>{user.name}</span></p>
                            <FiClock />
                            <p>{formattedDate}</p>
                        </div>

                        {
                            movie.tags &&
                            movie.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)}
                                    title={tag.name}
                                />

                            ))
                        }

                        <p>{movie.description}</p>
                    
                        <Button 
                            deleteStyle
                            title="Excluir filme"
                            onClick={handleDeleteMovie}
                        />
                        
                    </Content>
                </main>
            }

        </Container>
    )
}