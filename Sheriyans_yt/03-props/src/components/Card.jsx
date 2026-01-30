import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1763264683444-8d0dcb2ebecf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
      </div>
  )
}

export default Card
