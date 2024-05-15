import { useState } from "react";
import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        console.log(name, email, password);
        if(!name || !email || !password) {
            return alert("Preencha todos os campos");
        }

        api.post("/users", {name, email, password})
         .then(() => {
            alert("Usuário cadastrado com sucesso");
            navigate("/");
         })
         .catch( error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Ocorreu um erro inesperado. Tente novamente mais tarde.");
            }
         });
    }


    return (
        <Container>
            <Background />
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                />
                
                <Input 
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                />
                

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            
        </Container>
    )
}