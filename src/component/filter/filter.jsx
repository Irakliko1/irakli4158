import React, { useState, useEffect } from 'react';
import './filter.css';
import Chevron from '../../assets/logo/chevron.png';
import rait5 from '../../assets/filterpageicons/rating5.png';
import rait4 from '../../assets/filterpageicons/rating4.png';
import rait3 from '../../assets/filterpageicons/rating3.png';
import rait2 from '../../assets/filterpageicons/rating2.png';
import gridview from '../../assets/filterpageicons/gridview.png';
import dot from '../../assets/filterpageicons/dot.png';
import listview from '../../assets/filterpageicons/listview.png'
import fav from '../../assets/prodacts/add-to-cart-3046.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItemTocart } from '../../slices/cart/cart.slice';

import DualRangeSlider from '../pricerangeslider';
import { useNavigate, useSearchParams } from 'react-router-dom';



const Filter = () => {
    const [categories, setCategories] = useState([]);
    const [productes, setProductes] = useState([]);

    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isBrandsOpen, setBrandsOpen] = useState(false);
    const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);
    const [isRatingOpen, setRatingOpen] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams()
    const params = Object.fromEntries([...searchParams]);
    const navigate = useNavigate()

    const token = JSON.parse(localStorage.getItem('token'))

    const dispatch = useDispatch()

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


    useEffect(() => {
      axios
        .get( `https://amazon-digital-prod.azurewebsites.net/api/product/products?CategoryId=${params.currentCategory? params.currentCategory : ('')}&PriceFrom=${('')}&PriceTo=${('')}`)
        .then((response) => {
            setProductes(response.data ) ; 
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    }, [searchParams]);
    
    const handleCurrentCategory = (id) => {
        setSearchParams({
            ...params,
            currentCategory: id,
        })};

  const handlelink = (id) => {navigate(`/productview/${id}`)}


      const handleAddToCart = (id) => {
        dispatch(addItemTocart(id))
      }
  
    
    
  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  const toggleBrands = () => {
    setBrandsOpen(!isBrandsOpen);
  };

  const togglePriceRange = () => {
    setPriceRangeOpen(!isPriceRangeOpen);
  };

  const toggleRating = () => {
    setRatingOpen(!isRatingOpen);
  };

  return (
    <div className='navigation_container5'>
        <div className='filter_container'>
            {/* Category Filter */}
            <div className={`filter_box ${isCategoryOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleCategory}>
                    <span>Category</span>
                    <img src={Chevron} alt="" className={isCategoryOpen ? 'rotate' : ''} />
                </div>
                <ul className='category_ul' style={{ display: isCategoryOpen ? 'flex' : 'none' }}>
                {categories.map((category,i) => {
          return (
              <li key={i+987655678797925} onClick={()=>{handleCurrentCategory(category.id)}}>{category.name}</li>
              )
            
          })}
                </ul>
                {isCategoryOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Brands Filter */}
            <div className={`filter_box ${isBrandsOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleBrands}>
                    <span>Brands</span>
                    <img src={Chevron} alt="" className={isBrandsOpen ? 'rotate' : ''} />
                </div>
                <ul className='brand_ul' style={{ display: isBrandsOpen ? 'flex' : 'none' }}>
                {productes.map((product,i) => {
                    return (
                            <li key={i+989888989892627}>
                                <label>
                                    <input type="checkbox" name="" id="" />{product.brand}
                                </label>
                            </li>
                )})}
                </ul>       
            </div>

           
            {/* Price Range */}
            <div className={`filter_box ${isPriceRangeOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={togglePriceRange}>
                    <span>Price range</span>
                    <img src={Chevron} alt="" className={isPriceRangeOpen ? 'rotate' : ''} />
                </div>
                <div className='priserange_filter' style={{ display: isPriceRangeOpen ? 'block' : 'none' }}>
                    <DualRangeSlider/>
                </div>
            </div>

        

            {/* Rating Filter */}
            <div className={`filter_box ${isRatingOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleRating}>
                    <span>Rating</span>
                    <img src={Chevron} alt="" className={isRatingOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isRatingOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={rait5} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={rait4} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={rait3} alt="" />
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <img src={rait2} alt="" />
                        </label>
                    </li>
                </ul>
            </div>
        </div>

        <div className='nav_container'>
            <div className='nav_1'>
                <h1>Products</h1>
                <div className='gridview_listview'>
                    <img className='gridview' src={gridview} alt="" />
                    <img className='listview' src={listview} alt="" />
                </div>
            </div>

            <div className='nav_box_container'>
             {/* Products */}
             {productes.map((product,i) => {
        return (
                <div key={i+878762987139127} className='nav_2'>
                    <div className='product_img1'>
                        <img onClick={()=>{handlelink(product.id)}} src={product.images} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span onClick={()=>{handlelink(product.id)}} className='span1'>{product.name}</span>
                        <div className='span_box'>
                            <span className='new_prise'>${product.price}</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>150</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'> {product.brand} {product.model}</span>
                            <span onClick={()=>{handlelink(product.id)}} className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                        <img style={{cursor:'pointer'}} src={fav} alt="addtocart" onClick={() => {handleAddToCart(product.id)}}/>
                    </div>
                </div>
        )
      })}
            </div>
        </div>
    </div>
  );
}

export default Filter;