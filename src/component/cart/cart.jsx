import React from 'react'
import './cart.css'
import bag from '../../assets/prodacts/bag.png'
import chevron from '../../assets/logo/chevron.png'
import chevronleft from '../../assets/prodacts/chevronleft.png'
import security from '../../assets/prodacts/security.png'
import message from '../../assets/prodacts/message.png'
import deliver from '../../assets/prodacts/deliver.png'
                // import bag from '../../assets/pictures/bag.png'
                // import chevron from '../../assets/logo/chevron.png'
                // import chevronleft from '../../assets/logo/chevronleft.png'
                // import lock from '../../assets/logo/lock.png'
                // import message from '../../assets/logo/chat.png'
                // import truck from '../../assets/logo/truck.png'

const Cart = () => {
  return (
    <div className='cart_container'>
      <h1>my cart (2)</h1>
      <div className='cart_product_container'>
        <div className='cart_product_box'>
          <div>
              <img src={bag} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-bags with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$78.99</span>
            <span className='quantity'>Qty:9 <img src={chevron} alt="" /></span>
          </div>
        </div>
        <div className='cart_product_box'>
          <div>
              <img src={bag} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-bags with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$78.99</span>
            <span className='quantity'>Qty:9 <img src={chevron} alt="" /></span>
          </div>
        </div>
        <div className='cart_product_box'>
          <div>
              <img src={bag} alt="" />
          </div>
          <div className='cart_product_box2'>
            <div>
              <span>T-bags with multiple colors, for men and lady</span>
            </div>
            <div>
              <span>Size: medium, Color: blue,  Material: Plastic Seller: Artel Market</span>
            </div>
            <div className='cart_button_container'>
              <button>remove</button>
              <button>save for latter</button>
            </div>
          </div>
          <div className='quant_container'>
            <span>$78.99</span>
            <span className='quantity'>Qty:9 <img src={chevron} alt="" /></span>
          </div>
        </div>

        
        <div className='cart_prise'>
          <button> <img src={chevronleft} alt="" /> Back to shop</button>
          <button>Remove all</button>    
        </div>

        <div className='delivery_container'>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={message} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={security} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          <div className='delivery_1'>
            <div className='lock_container'>
             <img src={deliver} alt="" />
            </div>
            <div className='delivery_2'>
              <span className='delivery_span1'>Customer support</span>
              <span className='delivery_span2'>Have you ever finally just </span>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Cart
