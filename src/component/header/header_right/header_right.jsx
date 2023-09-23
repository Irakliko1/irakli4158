import React from 'react'
import './header_right.css'
import profile from '../../../assets/logo/profile.png'
import message from '../../../assets/logo/message.png'
import heart from '../../../assets/logo/heart.png'
import cart from '../../../assets/logo/cart.png'
import { Link } from 'react-router-dom'

const Headerright = () => {
  return (
    <div className='icon_box'>
      <Link style={{textDecoration: 'none'}} to={'/authorization'}>
      <div className='icon_container'>
        <img src={profile} alt='icons' />
        <span>Profile</span>
      </div>            
      </Link>
      <div className='icon_container2'>
        <img src={message} alt='icons' />
        <span>message</span>
      </div>   
      <Link style={{textDecoration: 'none', color:'black'}} to={'/productview'}>
      <div className='icon_container2'>
        <img src={heart} alt='icons' />
        <span>Orders</span>
      </div> 
      </Link>         
      <Link style={{textDecoration: 'none'}} to={'/addcart'}>
      <div className='icon_container'>
        <img src={cart} alt='icons' />
        <span>my cart</span>
      </div>            
      </Link>           
    </div>
  )
}

export default Headerright
