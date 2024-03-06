import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Titulares from './pages/titulares'
import Reservas from './pages/reservas'
import NaoRelacionados from './pages/nao relacionados'
import Api from './pages/api'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Titulares /> }></Route>
                    <Route path="/reservas" element={ <Reservas /> }></Route>
                    <Route path="/naorelacionados" element={ <NaoRelacionados /> }></Route>
                    <Route path="/api" element={ <Api /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes