/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './styles.css'
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'


// JSX 

const App = () => {
  const [users, setUsers] = useState([])

  // REACT HOOKS => FERRAMENTAS AUXILIARES

  const addNewUser = () => {
    setUsers()
  }
 
  // ESTADO => VARIÁVEL 
  // Estado no react é imutável

  return (
    <div className="container">
      <img alt="logo-imagem" src={People} className="image"/> 
      <div className="containerItens">
      <h1> Olá! </h1>

      <p className="inputLabel"> Nome </p>
      <input onChange={changeInputName} placeholder="Nome"/>

      <p className="inputLabel"> Idade </p>
      <input placeholder="Idade"/>

      <button onClick={addNewUser} className="Button" alt="lata de lixo"> Cadastrar <img alt="seta" src={Arrow} /> </button>

      <ul> 
        { users.map( user => (
          <li className="User" key={user.id}> 
            <p className="paragraphUser"> {user.name} </p> <p> {user.age} </p> 
            <button className="buttonTrash"> <img src={Trash}/> </button>
          </li>
        ))}
      </ul>

      </div>
    </div>
  )
}

export default App