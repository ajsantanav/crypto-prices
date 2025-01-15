import Currencies from "./pages/Currencies"
import Main from "./pages/Main"
import Price from "./pages/Price"
import Nav from "./components/Nav"
import { Route, Routes } from "react-router"

function App() {


  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </>
  )
}

export default App
