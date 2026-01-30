import React from 'react'

const App = () => {

  const user = {
    username: 'Varun',
    age: 18,
    city:'Bangalore'
  }

  localStorage.setItem('user',JSON.stringify(user))
  const users = JSON.parse(localStorage.getItem('user'))

  console.log(users);
  

  return (
    <div>
      App
    </div>
  )
}

export default App