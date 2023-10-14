import React, { useEffect, useState } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import chevron from '../../assets/logo/chevron.png';
import chevronleft from '../../assets/prodacts/chevronleft.png';
import security from '../../assets/prodacts/security.png';
import message from '../../assets/prodacts/message.png';
import deliver from '../../assets/prodacts/deliver.png';

// dsadasdsdsadddsds

const Cart = () => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));

  const [removedId, setRemovedId] = useState('');
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get(
          'https://amazon-digital-prod.azurewebsites.net/api/cart/getmycartproducts',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setCartProducts(response.data);
      } catch (error) {
        console.error('API request error:', error);
      }
    };

  
    fetchCartProducts();
  }, [removedId, token]);

  const removeFromCart = async (id) => {
    try {
      const response = await fetch(
        `https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId: id }),
        }
      );
      if (response.ok) {
        setRemovedId(id);
      }
    } catch (error) {
      console.error('Error while removing from cart:', error);
    }
  };

 
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartProducts) {
      totalPrice += item.price;
    }
    return totalPrice.toFixed(2);
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
        <div className='cart_total_price'>
          <span>Total Price:</span>
          <span>${calculateTotalPrice()}</span>
        </div>
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
