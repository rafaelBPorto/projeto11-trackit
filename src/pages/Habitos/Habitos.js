import Header from "../../components/Header.js"
import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/User.js"
import CadastrarHabito from "../../components/CadastrarHabito/CadastrarHabito.js"
import styled from "styled-components"
import axios from "axios"


const Habitos = () => {
    const { data } = useContext(UserContext)
    const [qtdHabitos, setQtdHabitos] = useState(undefined)
    const [adicinarHabitos, setAdicionarHabito] = useState(false)
    const [habitos, setHabitos] = useState(undefined)

    function handleHabito(){
        if(!adicinarHabitos){
            setAdicionarHabito(!adicinarHabitos)
        }
    }

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { headers: { "Authorization": `Bearer ${data.token}` } })
            .then(res => {
                (setQtdHabitos(res.data.length))
                console.log(res.data)
                setHabitos(res.data)
            })
    }, [])

    if(qtdHabitos===undefined){
        return <div>Carregando...</div>
    }

    return (
        <ContainerHabitos>
            <Header />
            <MeusHabitos>
                <h1>Meus hábitos</h1>
                <button onClick={handleHabito}>+</button>
            </MeusHabitos>
            {adicinarHabitos &&(
                <CadastrarHabito setAdicionarHabito={setAdicionarHabito} token={data.token}/>
            )}
            {qtdHabitos === 0? (
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            ): (
                <>
                {habitos.map((h)=>{
                    return(
                        <h1 key={h.id}> {h.name}</h1>
                    )
                })}
                </>
            )}

        </ContainerHabitos>
    )
}

export default Habitos;

const ContainerHabitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
const MeusHabitos = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    h1{
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        background: #52B6FF;
        border: none;
        color: white;
        font-weight: 400;
        font-size: 26.976px;
    }
`