import React from 'react'
import './banner_main.css'
import Navigation from '../navigation/navigation'
import Bannerimg from '../banner_img/banner_img'
import Login from '../login/login'
 //asdgjbsdjbgskjdb
const Bannermain = () => {
  return (
    <div className='banner_container'>
      <div className='banner_container2'>
          <Navigation/>
          <Bannerimg/>
          <Login/>
      </div>
    </div>
  )
}

export default Bannermain
