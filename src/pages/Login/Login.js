import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/logo_trackit.png"
import { ContainerIdentificacao } from "../../assets/styles/StyleIndendificacao";
import { UserContext } from "../../context/User";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {submit} = useContext(UserContext)
    const navigate = useNavigate();

    const login = { 
        email: email,
        password: senha
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login)
            .then(res=> {
                const data = res.data
                submit({data})
                navigate('/habitos')})
            .catch(err => alert(err.response.data))
        // navigate("/cadastro");
    }
    return (
        <ContainerIdentificacao>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input
                    data-identifier="input-email"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="senha"
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            <Link to="/cadastro">
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </ContainerIdentificacao>
    );
};
export default Login;

