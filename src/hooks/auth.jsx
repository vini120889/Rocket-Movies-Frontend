import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children}) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post('/sessions', { email, password }, { withCredentials: true });
            const { user } = response.data;

            localStorage.setItem("@Rocketmovies:user", JSON.stringify(user));

            setData({ user });

        } catch (error) {

            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Erro ao realizar login, tente novamente mais tarde.');
            }

        }
    }

    function signOut() {
        localStorage.removeItem("@Rocketmovies:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {

        if(avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);

            const response = await api.patch('/users/avatar', fileUploadForm);
            user.avatar = response.data.avatar;
        }

        try {
            await api.put('/users', user);
            localStorage.setItem("@Rocketmovies:user", JSON.stringify(user));

            setData({user, token: data.token});
            alert('Perfil atualizado com sucesso!')

        } catch (error) {

            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao atualizar perfil, tente novamente mais tarde.");
            }

        }
    }


    useEffect(() => {
        const user = localStorage.getItem("@Rocketmovies:user");

        if(user) {
            setData({ user: JSON.parse(user) });
        }

    }, [])

    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            updateProfile,
            user: data.user,
            }}
        >
            
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}