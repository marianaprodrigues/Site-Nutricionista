import { Link } from 'react-router-dom'
import '../Menu/menu.css'

function Menu() {
    return(
        <>
        <header id='header'>
        <a id='logo' href='/'>Logo</a>
        <nav id='nav'>
        <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
        <span id="hamburger"></span>
        </button>
        <ul id="menu" role="menu">
            <li className="item">
                <Link className="link" to="/" >Home</Link>
            </li>
            <li className="item">
                <Link className="link" to="about" >Sobre Mim</Link>
            </li>
            <li className="item">
                <Link className="link" to="midias" >Midias</Link>
            </li>
            <li className="item">
                <Link className="link" to="contato" >Contactos</Link>
            </li>
            <li className="item">
                <Link className="link" to="servicos" >Serviços|Produtos</Link>
            </li>
            <a href='https://www.instagram.com/sofialiberal_nutri/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href='https://www.facebook.com/Sofia-Liberal-Nutrição-Integrativa-10496558094023' target='_blank'><i class="fa-brands fa-facebook-square"></i></a>
        </ul>
        
        </nav>
        </header>
        </>
    )
}

export default Menu