import React from 'react'
import Card from './component/card'
import Navbar from './component/Navbar'

const App = () => {
  const user = 'Varun'
  const age = 18
  return (
    <div>
      <Navbar />
      <Card />
      <Card />
    </div>
  )
}

export default App