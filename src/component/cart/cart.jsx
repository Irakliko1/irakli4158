import React, { useEffect, useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import chevronleft from '../../assets/prodacts/chevronleft.png';
import security from '../../assets/prodacts/security.png';
import message from '../../assets/prodacts/message.png';
import deliver from '../../assets/prodacts/deliver.png';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/cart/cart';

// dsdssddsdds
const Cart = ({removedId, setRemovedId, cartProducts}) => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));

  const dispatch = useDispatch()

  const removeFromCart = (id) => {
  dispatch(removeItemFromCart({token,id}))
  };

 
 

  return (
    <div className='cart_container'>
      <h1>My Cart ({cartProducts.length})</h1>
      <div className='cart_product_container'>
        {cartProducts.map((item) => (
          <div className='cart_product_box' key={item.id}>
            <div className='cart_image_container'>
              <img src={item.images[0]} alt="" />
            </div>
            <div className='cart_product_box2'>
              <div>
                <span>{item.brand}</span>
              </div>
              <div>
                <span>Size: medium, Color: blue, Material: Plastic Seller: Artel Market</span>
              </div>
              <div className='cart_button_container'>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button>Save for Later</button>
              </div>
            </div>
            <div className='quant_container'>
              <span>${item.price}</span>
             
            </div>
          </div>
        ))}
      </div>

      <div className='cart_price_summary'>
        <div className='cart_prise'>
          <button onClick={() => navigate('/filter')}>
            <img src={chevronleft} alt="" /> Back to Shop
          </button>
          <button>Remove All</button>
        </div>
      </div>

      <div className='delivery_container'>
        <div className='delivery_1'>
          <div className='lock_container'>
            <img src={message} alt="" />
          </div>
          <div className='delivery_2'>
            <span className='delivery_span1'>Customer Support</span>
            <span className='delivery_span2'>Have you ever finally just </span>
          </div>
        </div>

        <div className='delivery_1'>
          <div className='lock_container'>
            <img src={security} alt="" />
          </div>
          <div className='delivery_2'>
            <span className='delivery_span1'>Customer Support</span>
            <span className='delivery_span2'>Have you ever finally just </span>
          </div>
        </div>

        <div className='delivery_1'>
          <div className='lock_container'>
            <img src={deliver} alt="" />
          </div>
          <div className='delivery_2'>
            <span className='delivery_span1'>Customer Support</span>
            <span className='delivery_span2'>Have you ever finally just </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
