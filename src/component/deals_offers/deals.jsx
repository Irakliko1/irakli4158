import React from 'react'
import './deals.css'
import Timer from '../timer/timer'
import Laptop from '../../assets/prodact/laptop.png'

const Deals = () => {
  return (
    <div className='deals_container'>
      <div className='timer_container'>
          <Timer/>
      </div>
      <div className='prodact_container'>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
        <div className='sale_box'>
                <img src={Laptop} alt="Laptop" />
                <span className='product_description'>Laptops</span>        
                <span className='sale_percent'> -99%</span>
        </div>
      </div>
    </div>
  )
}

export default Deals
