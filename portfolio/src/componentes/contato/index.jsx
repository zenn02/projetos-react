import React from 'react'
import './index.css'
import img1 from '/wppicon.svg'
import img2 from '/instaicon.svg'
import img3 from '/gmailicon.svg'


function Contato() {
    return (
        <>
           
        <div id='div11'>

        <div id='texto1'>Entre em contato <br/> <br/> Para que possamos conversar mais sobre</div>

        </div>

        <div id='div22'>
        <div id='espaco'>
        <img src={img1} className = 'icon' />
        <p> +55 31 975035610</p>
        </div>
        <div id='espaco'>
        <img src={img2} className = 'icon' />
        <p> @gaibismello</p>
        </div>
        <div id='espaco'>
        <img src={img3} className = 'icon' />
        <p> gaibismello@gmail.com </p>
        </div>

        </div>




        </>
    )
    

    
    
    
}


export default Contato