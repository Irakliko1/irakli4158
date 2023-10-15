import './mycart.css'
import React, {useState, useEffect} from 'react'
import Cart from '../../component/cart'
import Checkout from '../../component/checkout'
import Subscribe from '../../component/sumbsribe/subscribe'
import Supplier from '../../component/supplier/supplier'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


const Mycart = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  const [removedId, setRemovedId] = useState('');
  const [cartProducts, setCartProducts] = useState([]);

  const { cartRmvloading } = useSelector((state) => state.removeFromCart);

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
  }, [removedId, token, cartRmvloading]);
  

  return (
    <div className='mycart_container'>
      <div className='flex_container'>
        <Cart removedId={removedId}  setRemovedId={setRemovedId} cartProducts= {cartProducts} />
        <Checkout cartProducts= {cartProducts}/>
      </div>
      <Supplier/>
      <Subscribe/>
    </div>
  )
}

export default Mycart
