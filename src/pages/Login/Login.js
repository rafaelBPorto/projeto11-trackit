import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/logo_trackit.png"
import { ContainerIdentificacao } from "../../assets/styles/StyleIndendificacao";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(senha);
        // navigate("/cadastro");
    }
    return (
        <ContainerIdentificacao>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <input
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

