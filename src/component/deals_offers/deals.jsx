import React from 'react'
import './deals.css'
import Timer from '../timer/timer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Deals = () => {
        const [offers, setOffers] = useState([]);

  // const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get('https://digitalamazonproject.azurewebsites.net/api/product/offers')
      .then((response) => {
        setOffers(response.data ) ; // Assuming the response contains an array of products

      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []);       

  return (
    <div className='deals_container'>
      <div className='timer_container'>
          <Timer/>
      </div>
      <div className='prodact_container'>

      {offers.map((offer) => {
        return (
        <div className='sale_box'>
                <Link to={'/productview'}>
                <img src={offer.image} alt="Laptop" />
                </Link>
                {/* <span className='product_description'>Laptops</span>         */}
                <span className='sale_percent'> {offer.newPrice} $</span>
        </div>
        )

      })}
        
      </div>
    </div>
  )
}

export default Deals
