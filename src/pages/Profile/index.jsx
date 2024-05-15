import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile() {
        const updated = {
            name,
            email, 
            password: newPassword,
            old_password: oldPassword
        }

        const updatedUser = Object.assign(user, updated);

        await updateProfile({ user: updatedUser, avatarFile });
    }

    function handleAvatarChange(e) {
        const file = e.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);    
    }

    return (
        <Container>

            <div className="header">
                <Link to={-1}>
                    <FiArrowLeft />
                    Voltar
                </Link>
            </div>

            <Form>
                <Avatar>
                    <img src={avatar} alt="user image" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar" 
                            type="file" 
                            onChange={handleAvatarChange}
                        />

                    </label>
                </Avatar>

                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha Atual"
                    onChange={(e) => setOldPassword(e.target.value)}
                    
                />

                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button 
                    title="Salvar"
                    onClick={handleUpdateProfile}
                />

            </Form>

        </Container>
    )
}