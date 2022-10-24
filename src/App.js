import Globalstyle from "./assets/styles/GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje";
import { UserProvider } from "./context/User"


function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
        <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
        </UserProvider>
    </BrowserRouter>
  )
}

export default App
