import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/logo_trackit.png"

import { ContainerIdentificacao } from "../../assets/styles/StyleIndendificacao";

const Cadastro = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")

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

                <input
                    type="text"
                    name="text"
                    placeholder="nome"
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="url"
                    name="foto"
                    placeholder="foto"
                    onChange={(e) => setFoto(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </ContainerIdentificacao>

    )
}

export default Cadastro