import styled from "styled-components"
import trackit from "../assets/imagens/trackit.png"
import React, { useContext } from "react"
import { UserContext } from "../context/User"



const Header = () =>{

    const {data} = useContext(UserContext)
    return(
        <ContainerHeder>
            <ContainerLogo src={trackit} alt="trackit" />
            <ContainerUser src={data.image} alt="imagem do Usuario" />
        </ContainerHeder>
    )
}

export default Header

const ContainerHeder = styled.div`
    position: relative;
    top: 0;
    left: 0; 
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 10px;
   
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`

const ContainerLogo = styled.img`
    width:97px;
`
const ContainerUser = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`