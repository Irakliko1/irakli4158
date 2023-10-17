import React, { useEffect, useState, useTransition } from 'react'
import './header_midle.css'
import search from '../../../assets/logo/search2.png'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { isPending } from '@reduxjs/toolkit'



const Headermidle = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const navigate = useNavigate();


  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    axios
      .get('https://amazon-digital-prod.azurewebsites.net/api/product/products')
      .then((response) => {
          setProducts(response.data) ; 
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  const searchSuggestHandler = (e) => {
    setSearchValue(e.target.value)
    startTransition(() => {
      let list = [];
      if(searchValue){
        list = (products.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))).slice(0, 4)
        setFilteredProducts(list)
      }
      else{
        setFilteredProducts([])
      }
    })
  }

  const handleSearch = () => {
    setSearchParams({
      ...params,
      searchKey: searchValue
    })
    setSearchValue('')
    navigate(`/filter?searchKey=${searchValue}`);
  };
  
  const handleClick = (id) => {
    navigate(`/productview/${id}`)
    setSearchValue('')
    
  }
  
  return (
      <div className='search_container'>
        <img src={search} alt="search" className='search_img'/>
        <div className='search_input_container'>
          <input value={searchValue} onChange={(e) => searchSuggestHandler(e)} type="text" placeholder='Search'/>
          <div className='search_results'>
            {searchValue? filteredProducts.map((item,i) => {
              return  <div onClick={() =>handleClick(item.id)} key={i+131313131313131} className='search_item'>
                        <div className='search_item_img' >
                          <img src={item.images[0]} alt="" />
                        </div>
                        <div className='search_item_span'>
                          <span onClick={() => handleClick(item.id)}>{item.name}</span>
                          <span>${item.price}</span>
                        </div>
                      </div>
            }) : ''}
          </div>
        </div>
        <Link style={{textDecoration:'none'}} to={'./filter'}><span> All category  </span>  </Link>
        <button onClick={() => handleSearch()}> Search </button>
      </div>
  )
}

export default Headermidle
