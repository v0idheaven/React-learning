import React from 'react'
import Section1 from './components/Section1/Section1'

const user = [
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    color:'blue',
    intro:'',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8MHx8fDA%3D',
    color:'blue',
    intro:'',
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwxfDB8fHww',
    color:'green',
    intro:'',
    tag:'Underbanked'
  }
]

const App = () => {
  return (
    <div>
      <Section1 users={user}/>
    </div>
  )
}

export default App