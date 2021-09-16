/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, {useState, useRef} from 'react'
import './styles.css'
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

// JSX 

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = () => {
    setUsers([...users, {
      id:Math.random(1000000),
      name:inputName.current.value,
      age:inputAge.current.value
    }])
  }

  const deleteUser = (userId) => {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <div className="container">
      <img alt="logo-imagem" src={People} className="image"/> 
      <div className="containerItens">
      <h1> Olá! </h1>

      <p className="inputLabel"> Nome </p>
      <input ref={inputName}  placeholder="Nome"/>

      <p className="inputLabel"> Idade </p>
      <input ref={inputAge} placeholder="Idade"/>

      <button onClick={addNewUser} className="Button" alt="lata de lixo"> Cadastrar <img alt="seta" src={Arrow} /> </button>

      <ul> 
        { users.map( user => (
          <li className="User" key={user.id}> 
            <p className="paragraphUser"> {user.name} </p> <p> {user.age} </p> 
            <button onClick={() => deleteUser(user.id)} className="buttonTrash"> 
              <img src={Trash}/> 
            </button>
          </li>
        ))}
      </ul>

      </div>
    </div>
  )
}

export default App