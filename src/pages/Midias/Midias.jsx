import '../Midias/midias.css'
import Video from "./Video"
import Text from "../Midias/Text"

function Midias(){
    return(
        <>
        <h1 id='h1-midias'>Midias</h1>
        <div className='card-container'>
    
        <div className='Card'>
        <Video link="https://www.youtube.com/embed/diF0zwYr0LM"/>
        <Text texto= 'À Conversa com Sofia Liberal: Nutrição | Episódio 208'/>        
        </div>
        </div>
        </>
    )
}

export default Midias