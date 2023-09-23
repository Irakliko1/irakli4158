import React from 'react'
import './header_midle.css'
import search from '../../../assets/logo/search2.png'
import chevron from '../../../assets/logo/chevron.png'
import { Link } from 'react-router-dom'

const Headermidle = () => {
  return (
    <div className='search_container'>
      <img src={search} alt="search" className='search_img'/>
      <input type="text" placeholder='Search'/>
      <span> All category <img src={chevron} alt="chevron" /> </span>
      <Link to={'./filter'}><button> Search </button></Link>
    </div>
  )
}

export default Headermidle
