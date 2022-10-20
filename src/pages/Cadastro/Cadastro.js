import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagens/logo_trackit.png"

import { ContainerIdentificacao } from "../../assets/styles/StyleIndendificacao";

const Cadastro = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const navigate = useNavigate()

    const body ={
        email: `${email}`,
        name: `${nome}`,
        image: `${foto}`,
        password: `${senha}`
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(body);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then(res=>{
                alert("usuário cadastrado com sucesso");
                navigate("/");
            })
            .catch(err => alert("usuário não cadastrado, tente novamente. Erro: ", err.response.data));
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
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="senha"
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <input
                    type="text"
                    name="text"
                    placeholder="nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <input
                    type="url"
                    name="foto"
                    placeholder="foto"
                    onChange={(e) => setFoto(e.target.value)}
                    required
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