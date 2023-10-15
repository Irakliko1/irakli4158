import React, { useEffect, useState } from 'react'
import './login.css'
import avatar from '../../../assets/logo/Avatar.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../slices/auth/auth.slice'
import { Modal } from 'antd';



const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

 const handleSignOut = () => {
  dispatch(logout())
 }

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



  return ( 
        <div className='login_container'>
          <div className='login'>
            <div className='avatar'>
              <img src={avatar} alt="avatar" />
              <span>Hi, user <br/> let's get stated</span>
            </div>
            
            <div className='login_buttons'>
            {isLoggedIn? (<button onClick={() =>  {showModal()}} className='join_button'>Log out</button>) : 
            (<>
              <Link to={'/registration'}>
                <button className='join_button'>Join now</button>
              </Link>
              <Link to={'authorization'}>
                <button className='login_button'>Log in</button>
              </Link>
            </>)}
            <Modal title="Log Out" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Yes'}>
              <p>Are you sure ?</p>
            </Modal>
            </div>
          </div>
          <div className='color_box'>
            <div className='orange'><span>Get US $10 off with a new supplier</span></div>
            <div className='blue'><span>Send quotes with supplier preferences</span></div>
          </div>
        </div>
  )
}

export default Login
