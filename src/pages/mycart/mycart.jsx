import './mycart.css'
import React from 'react'
import Cart from '../../component/cart'
import Checkout from '../../component/checkout'
import Subscribe from '../../component/sumbsribe/subscribe'
import Supplier from '../../component/supplier/supplier'

const Mycart = () => {
  return (
    <div className='mycart_container'>
      <div className='flex_container'>
        <Cart/>
        <Checkout/>
      </div>
      <Supplier/>
      <Subscribe/>
    </div>
  )
}

export default Mycart
