import React from 'react'
import { useState } from 'react'
// counter
const App = () => {

  const [num, setNum] = useState(0)

  function increase(){
    setNum (num + 1)
  }
  function decrease(){
    setNum (num - 1)
  }
  function increaseby5(){
    setNum (num + 5)
  }
  function decreaseby5(){
    setNum (num - 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseby5}>Increase by 5</button>
      <button onClick={decreaseby5}>Dncrease by 5</button>
    </div>
  )
}

export default App
