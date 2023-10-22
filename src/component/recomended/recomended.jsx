import React from 'react'
import './recomended.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Recomended = () => {
    const [Recomended, setRecomended] = useState([]);
    const navigate = useNavigate()
  
    useEffect(() => {
      axios
        .get('https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts')
        .then((response) => {
            setRecomended(response.data ) ; 
  
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
        {Recomended.map((recomended,i) => {
        return (
            <div key={i+9987554278}>
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
                
            </div>
          
          )
          
        })}
        </div>

    </div>
  )
}

export default Recomended

