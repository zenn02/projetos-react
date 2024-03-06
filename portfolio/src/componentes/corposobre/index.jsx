import img1 from '/icon-css.svg'
import img2 from '/icon-html.svg'
import img3 from '/icon-js.svg'
import img4 from '/icon-sql.svg'
import foto from '/imgFOTO.jpg'
import React from 'react'
import './index.css'


function CorpoSobre() {
    return (
        <>
            <div id='div1'>
            <div id='imagem'> <img src={foto} className = 'fotoperfil' /></div>
                <div id='div2'> Sou Gabriel Mello <br/> Aluno do Colégio Cotemig <br/>
                Ainda não me especializei em nenhuma área,<br/>
                mas me dou melhor com Html e java</div>
                
            </div>

            <div id='div3'>

            <div id='div4'>
            <img src={img1} className='icon1'/>
            <img src={img2} className='icon1'/>
            <img src={img3} className='icon1'/>
            <img src={img4} className='icon1'/>

            </div>

            </div>





        </>
    )
    

    
    
    
}


export default CorpoSobre