import {} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App'
import About from '../pages/About/About'
import Contactos from '../pages/Contactos/Contato'
import Midias from '../pages/Midias/Midias'
import Servicos from '../pages/Servicos/Servicos'
import Menu from '../components/Menu/Menu'
import Consultas from '../pages/Servicos/Consultas'
import Mentoria from '../pages/Servicos/Mentoria'
import Palestra from '../pages/Servicos/Palestra'
import Livro from '../pages/Servicos/Livro'
import Suplemento from '../pages/Servicos/Suplemento'
import Ebook from '../pages/Servicos/Ebook'
import Curso from '../pages/Servicos/Curso'
import Revistas from '../pages/Servicos/Revistas'
import Aplicativo from '../pages/Servicos/Aplicativo'
import Home from '../pages/Home/Home'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='midias' element={<Midias />}/>
            <Route path='contato' element={<Contactos />}/>
            <Route path='servicos' element={<Servicos />}/>
            <Route path='src/pages/servicos/consultas' element={<Consultas />}/> 
            <Route path='src/pages/servicos/mentoria' element={<Mentoria />}/>
            <Route path='src/pages/servicos/palestra' element={<Palestra />}/>
            <Route path='src/pages/servicos/livro' element={<Livro />}/>
            <Route path='src/pages/servicos/suplemento' element={<Suplemento />}/>  
            <Route path='src/pages/servicos/ebook' element={<Ebook />}/>
            <Route path='src/pages/servicos/curso' element={<Curso />}/>
            <Route path='src/pages/servicos/revista' element={<Revistas />}/>
            <Route path='src/pages/servicos/aplicativo' element={<Aplicativo />}/>   
        </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes