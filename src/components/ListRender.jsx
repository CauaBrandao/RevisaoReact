import { useState } from 'react'

function ListRender() {
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Jones", age: 19 },
    { id: 3, name: "Pedro", age: 22 },
    { id: 4, name: "Scorpion", age: 201 },
    { id: 5, name: "Josias", age: 45 },
  ])

  function deleteRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length)
    const randomUser = users[randomIndex]

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== randomUser.id)
    })
  }

  return (
    <div className="list-render-container">
      <div className="list-columns">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} anos
            </li>
          ))}
        </ul>
      </div>
      <button onClick={deleteRandomUser}>Delete random user</button>
    </div>
  )
}

export default ListRender
