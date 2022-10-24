import { useEffect, useState } from "react";
import styled from "styled-components";
import { DiasDaSemana } from "./DiasdaSemana";
import ExibirDias from "./ExibirDias";

const CadastrarHabito = () => {

    const [habito, setHabito] = useState(undefined)
    const [diasSelecionados, setDiasSelecionados] = useState([])
    console.log(diasSelecionados)

    useEffect(() => {

    }, [])
    return (
        <CardHabito>
            Cadastrar Habito
            <input
                type="text"
                name="habito"
                placeholder="nome do hábito"
                onChange={(e) => setHabito(e.target.value)}
            />
            {DiasDaSemana.map((d, index) => {
                return (
                    <ExibirDias
                        key={d.idDia}
                        diaSemana={d}
                        diasSelecionados={diasSelecionados}
                        setDiasSelecionados={setDiasSelecionados} />
                )

            })}
        </CardHabito>
    )
}

export default CadastrarHabito;

const CardHabito = styled.div`

`

const BoxDia = styled.button`
`