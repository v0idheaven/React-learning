import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftText = () => {
  return (
    <div className='h-full flex flex-col w-1/3'>
        <HeroText />
        <Arrow/>
        
    </div>
  )
}

export default LeftText