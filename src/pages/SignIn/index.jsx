import { useState } from "react";
import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn({ email, password }) {
        signIn({ email, password });
    }
    
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça o seu login</h2>

                <Input 
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Button 
                    title="Entrar"
                    onClick={() => handleSignIn({ email, password })}
                />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}