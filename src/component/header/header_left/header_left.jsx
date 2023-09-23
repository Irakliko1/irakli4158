import React from 'react'
import './header_left.css'
import Brand from '../../../assets/logo/brand.png'
import { Link } from 'react-router-dom'

const Header_left = () => {
  return (
    <div className='brand_container' >  
    <Link to={'./'}>
       <img src={Brand} alt="brand" /> 
    </Link>
    </div>
  )
}

export default Header_left
