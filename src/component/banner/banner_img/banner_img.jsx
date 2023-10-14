import React from 'react'
import './banner_img.css'
import { Link } from 'react-router-dom'

const Bannerimg = () => {
  return (
      <div className='main_banner'>
          <div className='text_container'>
            <span className='text1'>Latest trending </span>
            <span className='text2'>Electronic items</span>
            <Link style={{textDecoration:'none'}} to={'/filter'}>
            <button>Learn more</button>
            </Link>
          </div>
      </div>

  )
}

export default Bannerimg
