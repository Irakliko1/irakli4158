import './mycart.css'
import React, {useState, useEffect} from 'react'
import Cart from '../../component/cart'
import Checkout from '../../component/checkout'
import Subscribe from '../../component/sumbsribe/subscribe'
import Supplier from '../../component/supplier/supplier'
import axios from 'axios'

const Mycart = () => {

  const token = JSON.parse(localStorage.getItem('token'))

  

  return (
    <div className='mycart_container'>
      <div className='flex_container'>
        <Cart />
        <Checkout/>
      </div>
      <Supplier/>
      <Subscribe/>
    </div>
  )
}

export default Mycart
