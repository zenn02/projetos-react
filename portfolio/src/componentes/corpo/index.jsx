import React from 'react'
import './index.css'
import img from '/img.svg'

function Corpo() {
    return (
        <>
            <div id='grid-container'>
                <div id='grid-item'> <div>Olá, sou <br/><span id='nome'> Gabriel Mello</span><br/> Dev Android <br/>
                <button id='btn'> SAIBA MAIS</button></div></div>
                <div id='grid-item'> <img src={img} className='imagem'/> </div>
            </div>





        </>
    )
    

    
    
    
}


export default Corpo