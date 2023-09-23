import React from 'react'
import './login.css'
import avatar from '../../../assets/logo/Avatar.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return ( 
        <div className='login_container'>
          <div className='login'>
            <div className='avatar'>
              <img src={avatar} alt="avatar" />
              <span>Hi, user <br/> let's get stated</span>
            </div>
            <div className='login_buttons'>
              <Link to={'/registration'}>
              <button className='join_button'>Join now</button>
              </Link>
              <Link to={'authorization'}>
              <button className='login_button'>Log in</button>
              </Link>
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
