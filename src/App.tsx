import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Botao } from './components/botao'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <img src = './uepb.png' alt = 'UEPB'></img>
    <h3>Faça seu login</h3>
    <div className= 'input'>
    <label htmlFor="">CPF</label>
    <input type="text" id = 'cpf'/>

    </div>
    
    
    <div className = 'input'>
    <label htmlFor="pass">Senha</label>
    <input type="password" id = 'pass'/>

    </div>

    <Botao title = 'Batata' ></Botao>
    <Botao title = 'Batata' ></Botao>

    </>
    
 
  )
}

export default App
