import axios from "axios"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import { useContext, useEffect } from "react"
import Header from "../../components/Header"
import { UserContext } from "../../context/User"



const Hoje = () => {
    const hoje = dayjs().locale("pt-br").format("dddd, DD/MM")
    const { data } = useContext(UserContext)
    

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", { headers: { "Authorization": `Bearer ${data.token}` }, })
            .then(res => (console.log(data)))
    }, [])
    return (
        <div>
            {/* <Header /> */}
            <h1>{hoje}</h1>
        </div>
    )
}

export default Hoje;