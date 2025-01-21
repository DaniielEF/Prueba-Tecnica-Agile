import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Formulario'
import ListaFormularios from './components/ListaFormularios'

function App() {

  return (
    <>
      <Formulario/>
      <br/>
      <ListaFormularios/>
    </>
  )
}

export default App
