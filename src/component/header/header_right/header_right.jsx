import React from 'react'
import './header_right.css'
import profile from '../../../assets/logo/profile.png'
import message from '../../../assets/prodacts/message.png'
import heart from '../../../assets/logo/heart.png'
import cart from '../../../assets/logo/cart.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import sigout from '../../../assets/loginicons/logout.png'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../../../slices/cart/cart.slice'
import { Modal } from 'antd';
import { logout } from '../../../slices/auth/auth.slice'


const Headerright = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const { products, postLoading } = useSelector((state) => state.cartService);
  const { cartRmvloading } = useSelector((state) => state.removeFromCart);
  const { isLoggedIn } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  const navigate = useNavigate()

 const handleSignOut = () => {
  dispatch(logout())
 }


useEffect (() => {
  if(isLoggedIn){
    dispatch(getCartProducts())
  }
},[dispatch,postLoading,cartRmvloading, isLoggedIn])
  

   const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleSignOut();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


   const showCartModal = () => {
    if(isLoggedIn){
      navigate('/addcart')
    }else{
      setIsCartOpen(true);
    }
  };
  const handleCartOk = () => {
    navigate('/addcart')
    setIsCartOpen(false);
  };
  const handleCartCancel = () => {
    setIsCartOpen(false);
  };


  return (
    <div className='icon_box'>
      {isLoggedIn? (
         <div style={{cursor:'pointer'}} onClick={() => showModal()} className='icon_container'>
         <img src={sigout} alt='icons' />
         <span>sign out</span>
       </div> 
      ):
      <Link style={{textDecoration: 'none'}} to={'/authorization'}>
      <div className='icon_container'>
        <img src={profile} alt='icons' />
        <span>Profile</span>
      </div>            
      </Link>
      }
      <Modal title="Log Out" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Yes'}>
        <p>Are you sure ?</p>
      </Modal>
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
      <div style={{cursor:'pointer'}} onClick={() => {showCartModal()}} className='icon_container'>
        <img src={cart} alt='icons' />
        <span>my cart</span>
        <div  style={isLoggedIn && products.length > 0?{display:'block'}:{display:'none'}} className='cart_circle'>{products.length}</div>
      </div>            
      <Modal title="You Must Be Authorized" open={isCartOpen} onOk={handleCartOk} onCancel={handleCartCancel} okText={'Log In'}>
      </Modal>           
    </div>
  )
}

export default Headerright
