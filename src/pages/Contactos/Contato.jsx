import '../Contactos/contato.css'

function Contato(){
    return(
        <>
        <div id='div-contato'>
        <h1>Contacte-me através dos números:</h1>
        <h3>Conte as suas necessidades e agende a sua consulta</h3>
        <ul>
            <li>+351</li>
            <li>+351</li>        
        </ul>
        <h3>Email: info@nutrisofialiberal.pt</h3>
        <h3>Morada: Rua Luis Barroso, 526 - Vila Nova de Famalicão</h3>
        </div>
        <form action="">
            <div id='newlester'>
                <h2>RECEBA NOVIDADES NO SEU E-MAIL</h2>
                <h4>Cadastre o seu e-mail no campo abaixo para receber novidades e lançamentos.</h4>
                <input type="email" placeholder='Digite o seu e-mail aqui'/>
                <input type="button" value="enviar" />
                <lable></lable>
            </div>
        </form>
        </>
    )
}

export default Contato