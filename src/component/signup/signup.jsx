import React from 'react'
import './signup.css'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import brend from '../../assets/logo/brand.png'
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <div className='all_content5'>
        <div className='all_content52'>
            <div className="container5">
            <div className="forms5">
            <div className="form-content5">
                <div className="login-form5">
           <div className='brand5'>
            <Link to={'/'}>
                 <img src={brend} alt="" />
            </Link>
           </div>
                <div className="title5">Sign Up</div>
                <form action="#">
                    <div className="input-boxes5">
                    <div className="input-box5">
                        <FaUser className='sigin_icons5'/>
                        <input type="email" placeholder="Enter your email / user" required />
                    </div>
                    <div className="input-box5">
                        <FaEnvelope className='sigin_icons5' />
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box5">
                        <FaLock className='sigin_icons5'/>
                        <input type="password" placeholder="Enter your password" required />
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
