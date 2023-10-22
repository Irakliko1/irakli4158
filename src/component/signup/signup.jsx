import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import brend from '../../assets/logo/brand.png';
import { useDispatch } from 'react-redux';
import { register } from '../../slices/auth/auth.slice';


const   Signup = () => {
    const [user, setUser]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [rePassword, setRePassword]= useState('')

    const dispatch=useDispatch();

    const handleSignup = (e) => {
        e.preventDefault()
        dispatch(register({user,email,password}))
        setEmail('');
        setPassword('');
        setRePassword('');
    }


  return (
    <div className='all_content5'>
        <div className='all_content52'>
            <div className="container5">
            <div className="forms5">
            <div className="form-content5">
                <div className="login-form5">
           <div className='brand5 logo-animation'>
            <Link to={'/'}>
                 <img src={brend} alt="" />
            </Link>
           </div>
                <div className="title5">Sign Up</div>
                <form onSubmit={(e)=>{handleSignup(e)}}>
                    <div className="input-boxes5">
                    <div className="input-box5">
                        <FaUser className='sigin_icons5'/>
                        <input value={user} onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="Enter your user" required />
                    </div>
                    <div className="input-box5">
                        <FaEnvelope className='sigin_icons5' />
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box5">
                        <FaLock className='sigin_icons5'/>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="input-box5">
                        <FaLock className='sigin_icons5'/>
                        <input value={rePassword} onChange={(e)=>{setRePassword(e.target.value)}} type="password" placeholder="repeat your password" required />
                    </div>
                    <div className="button5 input-box5">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text5"> You already have account? <label htmlFor="flip"> <Link to={'/authorization'}>  Login now </Link></label></div>
                    </div>
                </form>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup
