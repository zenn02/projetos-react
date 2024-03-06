import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Cabecalho() {

  return (
    <>
    <div id='cabecalho'>
      <ul>
        <li><Link className="nav-texto" to="/">Home</Link></li>
        <li><Link className="nav-texto" to="/sobre">Sobre</Link></li>
        <li><Link className="nav-texto" to="/projetos">Projetos</Link></li>
        <li><Link className="nav-texto" to="/contato">Contato</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Cabecalho
