import React from 'react'
import './navigarion.css'
import axios from 'axios';
import { useEffect,useState } from 'react';


const Navigation = () => {
  const [offers, setOffers] = useState([]);

  // const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get('https://digitalamazonproject.azurewebsites.net/api/product/categories      ')
      .then((response) => {
        setOffers(response.data ) ; // Assuming the response contains an array of products

      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []); 

  return (
      <div className='navigation_container'>
        <ul>
        {offers.map((navigation) => {
          return (
              <li>{navigation.name}</li>
              )
            
          })}
          </ul>
      </div>
  )
}

export default Navigation
