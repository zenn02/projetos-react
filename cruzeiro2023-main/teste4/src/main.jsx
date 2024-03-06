import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import HeaderTitular from '../src/titulares/header/headertitular'
import FooterTitular from '../src/titulares/footer/footertitular'
import BodyTitular from '../src/titulares/body/bodytitular'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderTitular/>
    <BodyTitular/>
    <FooterTitular/>
  </React.StrictMode>,
)
