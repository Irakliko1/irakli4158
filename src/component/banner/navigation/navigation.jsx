import React from 'react'
import './navigarion.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';



const Navigation = () => {
  const [categpres, setCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries([...searchParams]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/categories')
      .then((response) => {
        setCategories(response.data ) ; 

      })
      .catch((error) => {
        console.error('API request error:', error);
      });

  }, []); 

  const handleCurrentCategory = (id) => {
    setSearchParams({
      ...params,
      currentCategory: id,
    })
    navigate(`/filter?currentCategory=${id}`)
};

  return (
      <div className='navigation_container'>
        <ul>
        {categpres.map((category,i) => {
          return (
              <li key={i+123} onClick={()=>{handleCurrentCategory(category.id)}}>{category.name}</li>
              )
            
          })}
          </ul>
      </div>
  )
}

export default Navigation
