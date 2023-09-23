import React from 'react'
import './signin.css'
import 'font-awesome/css/font-awesome.min.css';
import { FaEnvelope,  FaLock,    } from 'react-icons/fa';
import brend from '../../assets/logo/brand.png'
import { Link } from 'react-router-dom';
import facebook from '../../assets/loginicons/facebook.png'
import twiter from '../../assets/loginicons/twitter.png'
import linkedin from '../../assets/loginicons/linkedin.png'
import google from '../../assets/loginicons/google.png'



const Signin = () => {
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
                <div className="title5">Login</div>
                <form action="#">
                    <div className="input-boxes5">
                    <div className="input-box5">
                        <FaEnvelope className='sigin_icons5' />
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box5">
                        <FaLock className='sigin_icons5'/>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="text5"><>Forgot password?</></div>
                    <div className='login_with'>
                        <span>Or login with</span>
                    </div>
                    <div className='social_icons'>
                        <Link to={'https://facebook.com/'}><img src={facebook} alt="" /></Link>
                        <Link to={'https://twiter.com/'}><img src={twiter} alt="" /></Link>
                        <Link to={'https://linkedin.com/'}><img src={linkedin} alt="" /></Link>
                        <Link to={'https://google.com/'}><img src={google} alt="" /></Link>
                    </div>
                    <div className="button5 input-box5">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text5">Don't have an account? <label htmlFor="flip"> <Link to={'/registration'}> Signup now </Link></label></div>
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

export default Signin
