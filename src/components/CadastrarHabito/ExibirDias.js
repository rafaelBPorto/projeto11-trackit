import { useState } from "react"
import styled from "styled-components"

const ExibirDias = ({diaSemana, diasSelecionados, setDiasSelecionados}) =>{
    
    const [isDia, isSetDia] = useState(false)

    function selecionarDia (){
        if(!isDia){
            const listaDias = [...diasSelecionados, diaSemana.idDia]
            listaDias.sort()
            setDiasSelecionados(listaDias)
        }else{
            const listaDias = diasSelecionados.filter(d=> diaSemana.idDia!==d)
            setDiasSelecionados(listaDias)
        }
        isSetDia(!isDia)
    }
    return(
        <BotaoDia onClick={selecionarDia} corBotao={isDia ?  "#CFCFCF" : "#ffffff"} corLetra={isDia ? "#ffffff" : "#CFCFCF"} >
            {diaSemana.tagName}
        </BotaoDia>
    )
}

export default ExibirDias
const BotaoDia = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.corBotao};
    color: ${props => props.corLetra};
    border: solid 1px #D4D4D4;
    border-radius: 3px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;

`