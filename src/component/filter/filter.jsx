import React, { useState } from 'react';
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
import applewatch from '../../assets/filterpageicons/applewatch.png';




const Filter = () => {
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
                <ul style={{ display: isCategoryOpen ? 'block' : 'none' }}>
                    <li>Mobile accessory</li>
                    <li>Electronics</li>
                    <li>Smartphones</li>
                    <li>Modern tech</li>
                </ul>
                {isCategoryOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Brands Filter */}
            <div className={`filter_box ${isBrandsOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleBrands}>
                    <span>Brands</span>
                    <img src={Chevron} alt="" className={isBrandsOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isBrandsOpen ? 'block' : 'none' }}>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Samsung
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Apple
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Huawei
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="" id="" />Pocco
                        </label>
                    </li>
                </ul>
                {isBrandsOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Features Filter */}
            <div className={`filter_box ${isFeaturesOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={toggleFeatures}>
                    <span>Features</span>
                    <img src={Chevron} alt="" className={isFeaturesOpen ? 'rotate' : ''} />
                </div>
                <ul style={{ display: isFeaturesOpen ? 'block' : 'none' }}>
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
                {isFeaturesOpen && <span className='seeall'>See all</span>}
            </div>

            {/* Price Range Filter */}
            <div className={`filter_box ${isPriceRangeOpen ? 'open' : ''}`}>
                <div className='nav_head' onClick={togglePriceRange}>
                    <span>Price range</span>
                    <img src={Chevron} alt="" className={isPriceRangeOpen ? 'rotate' : ''} />
                </div>
                <div className='priserange_filter' style={{ display: isPriceRangeOpen ? 'block' : 'none' }}>
                    {/* <PriceRangeSlider /> */}
                </div>
                {isPriceRangeOpen && <span>See all</span>}
            </div>

            {/* Condition Filter */}
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
                <span>12,911 items in<b> Mobile accessory</b> </span>
                <div className='gridview_listview'>
                    <input type="checkbox" name="checkbox" id="" />
                    <span>Verified only</span>
                    <span>Featured</span>
                    <img src={Chevron} alt="" />
                    <img className='gridview' src={gridview} alt="" />
                    <img className='listview' src={listview} alt="" />
                </div>
            </div>

            <div className='nav_box_container'>
             {/* Product Cards */}
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'> Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex rem at consectetur sequi illum. Quod, reiciendis. Quia eveniet, doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex rem at consectetur sequi illum. Quod, reiciendis. Quia eveniet, doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex rem at consectetur sequi illum. Quod, reiciendis. Quia eveniet, doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex rem at consectetur sequi illum. Quod, reiciendis. Quia eveniet, doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
                <div className='nav_2'>
                    <div className='product_img1'>
                        <img src={applewatch} alt="" />
                    </div>
                    <div className='prise_description'>
                        <span className='span1'>Canon Camera EOS 2000, Black 10x zoom</span>
                        <div className='span_box'>
                            <span className='new_prise'>$998.00</span>
                            <span className='old_prise'> <del>$1199.00</del></span>
                        </div>
                        <div className='rating_box'>
                            <div className='rating_star'>
                                <img src={rait4} alt="" />
                                <span>7.5</span>
                            </div>
                            <div className='order_info'>
                                <img src={dot} alt="" />
                                <span className='order_span'>194 orders</span>
                                <img src={dot} alt="" />
                                <span className='free_span'>Free Shipping</span>
                            </div>
                        </div>
                        <div className='spans_cont'>
                            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex rem at consectetur sequi illum. Quod, reiciendis. Quia eveniet, doloribus adipisci iste at nesciunt libero aspernatur ea veniam! Aliquid, placeat.</span>
                            <span className='view_detail'>View details</span>
                        </div>
                    </div>

                    
                    <div className='favorite'>
                         <img src={fav} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Filter;