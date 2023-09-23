import React from 'react'
import './main_header.css'
import Headerleft from '../header_left/header_left'
import Headermidle from '../header_midle/header_midle'
import Headerright from '../header_right/header_right'


const Mainheader = () => {
  return (
    <div className='Header_container'>
      <Headerleft/>
      <Headermidle/>
      <Headerright/>
      
      
    </div>
  )
}

export default Mainheader
