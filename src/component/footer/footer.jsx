import React, { useState } from 'react';
import './footer.css'; // Import your CSS for styling
import brand from '../../assets/logo/brand.png';
import chevron from '../../assets/logo/chevron.png';
import arrowup from '../../assets/logo/chevronup.png';
import facebook from '../../assets/social/facebook.png';
import instagram from '../../assets/social/instagram.png';
import linkedin from '../../assets/social/linkedin.png';
import twitter from '../../assets/social/twiter.png';
import youtube from '../../assets/social/youtube.png';
import appstore from '../../assets/social/appstore.png';
import playstore from '../../assets/social/playstore.png';
import usa from '../../assets/flags/usa.png';

const Footer = () => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [partnershipVisible, setPartnershipVisible] = useState(false);
  const [informationVisible, setInformationVisible] = useState(false);
  const [forUsersVisible, setForUsersVisible] = useState(false);
  

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const togglePartnership = () => {
    setPartnershipVisible(!partnershipVisible);
  };

  const toggleInformation = () => {
    setInformationVisible(!informationVisible);
  };

  const toggleForUsers = () => {
    setForUsersVisible(!forUsersVisible);
  };

 

  return (
    <>
      <div className='background1'>
        <div className='footer_container2'>
          <div className='balance'>
            <img src={brand} alt="" />
          </div>
        </div>
        <div className='footer_container'>
          <div className='about_box'>
            <div className='balance' onClick={toggleAbout}>
              <span className='aboutus'>about</span>
              <img src={chevron} alt="" />
            </div>
            {aboutVisible && (
              <>
                <span>About Us</span>
                <span>Find store</span>
                <span>Categories</span>
                <span>Blogs</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={togglePartnership}>
              <span className='Partnership'>Partnership</span>
              <img src={chevron} alt="" />
            </div>
            {partnershipVisible && (
              <>
                <span>About Us</span>
                <span>Find store</span>
                <span>Categories</span>
                <span>Blogs</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={toggleInformation}>
              <span className='Information'>Information</span>
              <img src={chevron} alt="" />
            </div>
            {informationVisible && (
              <>
                <span>Help Center</span>
                <span>Money Refund</span>
                <span>Shipping</span>
                <span>Contact Us</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' onClick={toggleForUsers}>
              <span className='For_users'>For users</span>
              <img src={chevron} alt="" />
            </div>
            {forUsersVisible && (
              <>
                <span>Login</span>
                <span>Register</span>
                <span>Settings</span>
                <span>My Orders</span>
              </>
            )}
          </div>
          <div className='about_box'>
            <div className='balance' >
              <span className='Get_app'>Get App</span>
              <img src={chevron} alt="" />
            </div>
            
              <div className='download'>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </div>
            
          </div>
        </div>
      </div>
      <div className='footer_line'>
        <span>© 2023 Ecommerce.</span>
        <div className='change_language'>
          <img className='usa' src={usa} alt="" />
          <span>english</span>
          <img src={arrowup} alt="" />
        </div>
        <div className='social_container'>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
