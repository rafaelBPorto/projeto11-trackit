import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { DiasDaSemana } from "./DiasdaSemana";
import ExibirDias from "./ExibirDias";

const CadastrarHabito = ({ setAdicionarHabito, token }) => {

    const [habito, setHabito] = useState(undefined)
    const [diasSelecionados, setDiasSelecionados] = useState([])

    function enviarHabito() {
        const body = {
            name: habito,
            days: diasSelecionados
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                alert("cadastro realizado")
                setAdicionarHabito(false)
            })
    }

    return (

        <CardHabito>
            <div>
                <input
                    type="text"
                    name="habito"
                    placeholder="nome do hábito"
                    onChange={(e) => setHabito(e.target.value)}
                />
            </div>
            <div>
                {DiasDaSemana.map((d) => {
                    return (
                        <ExibirDias
                            key={d.idDia}
                            diaSemana={d}
                            diasSelecionados={diasSelecionados}
                            setDiasSelecionados={setDiasSelecionados} />
                    )
                })}
            </div>
            <div>
                <button onClick={() => setAdicionarHabito(false)}>cancelar</button>
                <button onClick={enviarHabito}>salvar</button>
            </div>
        </CardHabito>
    )
}

export default CadastrarHabito;

const CardHabito = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;

`
