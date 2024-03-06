import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import PagContato from './pages/PagContato'
import PagProjetos from './pages/Projetos'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/sobre" element={<Sobre />} ></Route>
                <Route path="/projetos" element={<PagProjetos />} ></Route>
                <Route path="/contato" element={<PagContato />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes