import { Link } from 'react-router-dom'
import '../Servicos/servicos.css'

function Servicos(){
    return(
        <>
        <ul className="menu-serv">
            <li id='li' className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/consultas">Consultas</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/mentoria">Nutricoach | Mentoria</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/palestra">Palestra</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/livro">Livro</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/suplemento">Suplemento</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/ebook">Ebook</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/curso">Cursinho de Shots</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/revista">Revista</Link>
            </li>
            <li className="item-serv">
                <Link className="item-servicos" to="/src/pages/servicos/aplicativo">Aplicativos</Link>
            </li>
        </ul>
        </>
    )
}

export default Servicos