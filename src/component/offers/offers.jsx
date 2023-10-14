import React from 'react'
import './offers.css'
import chevron from '../../assets/logo/right_chevron.png'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  const [offers, setOffers] = useState([]);

  // const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/latestproducts')
      .then((response) => {
        setOffers(response.data ) ; // Assuming the response contains an array of products

      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []); 
  
  

  return (
    <div className='interier_container'>
        <div className='interier'>
            <div className='sourcenow_box'>
                <span>Home and <br/> outdoor</span>
                <button>Source now </button>
            </div>
        </div>
        <div className='product'>
          {offers.map((offer) => {
            return <Link style={{textDecoration:'none'}} key={offer.id} className='productbox_container' to={`/productview/${offer.id}`}>
                <div className='prise_container'>
                  <span className='description'>{offer.brand}</span>
                  <span className='prises'>from <br/> USD {offer.price}</span>
                </div>
                <img src={offer.images} alt="" />
              </Link>
         
              
              
            })}
        </div>  
        <div className='sourcenow2_btn'>
          <button>source now <img src={chevron} alt="chevron" /></button>
        </div>   
    </div>
  )
}

export default Offers;


