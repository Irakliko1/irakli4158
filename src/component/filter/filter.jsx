import React, { useState, useEffect } from 'react';
import './filter.css';
import Chevron from '../../assets/logo/chevron.png';
// import PriceRange from '../prise_range/prise';
import rait5 from '../../assets/filterpageicons/rating5.png';
import rait4 from '../../assets/filterpageicons/rating4.png';
import rait3 from '../../assets/filterpageicons/rating3.png';
import rait2 from '../../assets/filterpageicons/rating2.png';
import gridview from '../../assets/filterpageicons/gridview.png';
import dot from '../../assets/filterpageicons/dot.png';
import listview from '../../assets/filterpageicons/listview.png'
import fav from '../../assets/filterpageicons/fav.png';
import axios from 'axios';



const Filter = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
      axios
        .get('https://digitalamazonproject.azurewebsites.net/api/product/categories      ')
        .then((response) => {
          setOffers(response.data ) ; 
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    }, []);



    const [productes, setProductes] = useState([]);
    useEffect(() => {
      axios
        .get('https://digitalamazonproject.azurewebsites.net/api/product/products')
        .then((response) => {
            setProductes(response.data ) ; 
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    }, []);
    
    
    

  // State variables for controlling open/close state of filter sections
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isBrandsOpen, setBrandsOpen] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);
  const [isConditionOpen, setConditionOpen] = useState(false);
  const [isRatingOpen, setRatingOpen] = useState(false);

  // Functions to toggle the open/close state of filter sections
  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  const toggleBrands = () => {
    setBrandsOpen(!isBrandsOpen);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!isFeaturesOpen);
  };

  const togglePriceRange = () => {
    setPriceRangeOpen(!isPriceRangeOpen);
  };

  const toggleCondition = () => {
    setConditionOpen(!isConditionOpen);
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
                {offers.map((navigation) => {
          return (
              <li>{navigation.name}</li>
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
                {productes.map((product) => {
        return (


                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />{product.brand}
                        </label>
                    </li>
        )

      })}
                </ul>
                
            </div>

           
            {/* Price Range */}
            <div className={`filter_box ${isPriceRangeOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={togglePriceRange}>
                    <span>Price range</span>
                    <img src={Chevron} alt="" className={isPriceRangeOpen ? 'rotate' : ''} />
                </div>
                <div className='priserange_filter' style={{ display: isPriceRangeOpen ? 'block' : 'none' }}>
                    {/* <PriceRangeSlider /> */}
                </div>
            </div>

            {/* Condition Filter
            <div className={`filter_box ${isConditionOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleCondition}>
                    <span>Condition</span>
                    <img src={Chevron} alt="" className={isConditionOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isConditionOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Metallic
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Plastic cover
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />8GB Ram
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Super power
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Large Memory
                        </label>
                    </li>
                </ul>
                {isConditionOpen && <span className='seeall'>See all</span>}
            </div> */}

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
             {productes.map((prodict) => {
        return (
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={prodict.images} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>{prodict.name}</span>
                        <div className='span_box'>
                            <span className='new_prise'>${prodict.price}</span>
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
                            <span className='lorem'> {prodict.brand} {prodict.model}</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
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