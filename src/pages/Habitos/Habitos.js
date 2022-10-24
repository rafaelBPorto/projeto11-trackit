import Header from "../../components/Header.js"
import React, { useContext } from "react"
import { UserContext } from "../../context/User.js"
import CadastrarHabito from "../../components/CadastrarHabito/CadastrarHabito.js"


const Habitos = () =>{
    const {data} = useContext(UserContext)
    console.log(data)
    return(
     <div>
        {/* <Header /> */}
        <div>
            <h1>Meus hábitos</h1>
            <div>+</div>
        </div>
        <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
        <CadastrarHabito />
     </div>   
    )
}

export default Habitos;