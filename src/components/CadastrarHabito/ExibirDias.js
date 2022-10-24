import { useState } from "react"
import styled from "styled-components"

const ExibirDias = ({diaSemana, diasSelecionados, setDiasSelecionados}) =>{
    
    const [isDia, isSetDia] = useState(false)
    // console.log(diaSemana.dia +": " + isDia)
    // console.log(diasSelecionados)

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
        <BotaoDia onClick={selecionarDia}>
            {diaSemana.tagName}
        </BotaoDia>
    )
}

export default ExibirDias
const BotaoDia = styled.button`


`