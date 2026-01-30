import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh] px-18'>
        <LeftText />
        <ImageContainer user={props.user}/>
    </div>
  )
}

export default Page1Content