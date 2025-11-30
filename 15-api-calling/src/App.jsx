import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json()

  //   console.log(data);
  // }

  // const getData = async() => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(data)
  // }

  const getData = async() => {

    const [data, setData] = useState([])

    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data);
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App