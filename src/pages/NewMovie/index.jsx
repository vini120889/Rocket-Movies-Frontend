import { useState } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function NewMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");

    const navigate = useNavigate();

    function handleAddCategory() {
        setCategories(prevState => [...prevState, newCategory]);
        setNewCategory("");
    }

    function handleRemoveCategory(category) {
        setCategories(prevState => prevState.filter(item => item !== category));
    }

    async function handleSaveMovie() {
        
        if(!title || !rating || !description) {
            return alert("Preencha todos os campos!");
        }

        if(newCategory) {
            return alert("Adicione a categoria antes de salvar o filme!")
        }

        const ratingNumber = Number(rating);

        try {
            await api.post("/notes", {
                title,
                description,
                rating: ratingNumber,
                tags: categories
            })

            alert("Filme salvo com sucesso!");
            navigate(-1);

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao salvar filme, tente novamente mais tarde.");
            }
        }
    }

    return (
        <Container>
            <Header />

            <Link to={-1}>
                <FiArrowLeft />
                Voltar
            </Link>

            <Content>
                <h2>Novo Filme</h2>

                <div className="wrapper">

                    <Input 
                        type="text"
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input 
                        type="text"
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={e => setRating(e.target.value)}
                    />
                </div>


                <label htmlFor="obs">Observações</label>
                <textarea 
                    name="obs" 
                    id="obs" 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                ></textarea>


                <div>
                    <h3>Categorias</h3>

                    <div className="tags">
                        {
                            
                            categories.map((category, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={category}
                                    onClick={() => handleRemoveCategory(category)}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}
                            onClick={handleAddCategory} 
                        />
                    </div>

                </div>

                <Button 
                    title="Salvar filme"
                    onClick={handleSaveMovie}
                />
                
            </Content>

        </Container>
    )
}