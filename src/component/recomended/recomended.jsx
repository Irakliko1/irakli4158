import React from 'react'
import './recomended.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Recomended = () => {
    const [Recomended, setRecomended] = useState([]);
    const navigate = useNavigate()

    // const [selectedProductId, setSelectedProductId] = useState(null);
  
    useEffect(() => {
      // Make the API request when the component mounts
      axios
        .get('https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts')
        .then((response) => {
            setRecomended(response.data ) ; // Assuming the response contains an array of products
  
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
  
    }, []);   
    
    const handleClick = (id) => {navigate(`/productview/${id}`)}

  return (

    
    <div className='recomended_container'>
        <span>Recommended items</span>
        <div className='recomended_container2'>
        {Recomended.map((recomended) => {
        return (
            <>
                <div className='items_box'>
                    <div className='recomended_img'>
                        <img onClick={()=>{handleClick(recomended.id)}} src={recomended.images} alt="" />
                    </div>
                    <div  className='recomended_span'>
                        <span className='recomended-prise'>{recomended.price} $</span>
                        <span onClick={()=>{handleClick(recomended.id)}} className='recomended-product-span'>{recomended.brand}</span>
                    </div>
                </div>
                <div className='items_box'>
                    <div className='recomended_img'>
                        <img onClick={()=>{handleClick(recomended.id)}} src={recomended.images} alt="" />
                    </div>
                    <div  className='recomended_span'>
                        <span className='recomended-prise'>{recomended.price} $</span>
                        <span onClick={()=>{handleClick(recomended.id)}} className='recomended-product-span'>{recomended.brand}</span>
                    </div>
                </div>
                
            </>
          
          )
          
        })}
        </div>

    </div>
  )
}

export default Recomended

