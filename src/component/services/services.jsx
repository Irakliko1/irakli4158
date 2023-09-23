import React from 'react'
import './services.css'
import search from '../../assets/logo/search.png'
import inventory from '../../assets/logo/inventory.png'
import send from '../../assets/logo/Vector.png'
import security from '../../assets/logo/security.png'
import img1 from '../../assets/background_img/services1.png'
import img2 from '../../assets/background_img/services2.png'
import img3 from '../../assets/background_img/service3.png'
import img4 from '../../assets/background_img/service4.png'


const Services = () => {
  return (
    <div className='service_container'>
    <span>Our extra services</span>
    <div className='service_container2'>
        <div className='service_info_cotainer'>
            <img className='image1' src={img1} alt="" />
            <div className='logo1_circle'>
                <img className='logo1' src={search} alt="" />
            </div>
            <span>Source from <br/> Industry Hubs</span>
        </div>
        <div className='service_info_cotainer'>
            <img className='image1' src={img2} alt="" />
            <div className='logo1_circle'>
                <img className='logo1' src={inventory} alt="" />
            </div>
            <span>Customize Your <br/>Products </span>
        </div>
        <div className='service_info_cotainer'>
            <img className='image1' src={img3} alt="" />
            <div className='logo1_circle'>
                <img className='logo1' src={send} alt="" />
            </div>
            <span>Fast, reliable shipping  <br/> by ocean or air</span>
        </div>
        <div className='service_info_cotainer'>
            <img className='image1' src={img4} alt="" />
            <div className='logo1_circle'>
                <img className='logo1' src={security} alt="" />
            </div>
            <span>Product monitoring  <br/>and inspection</span>
        </div>
    </div>
</div>
  )
}

export default Services

