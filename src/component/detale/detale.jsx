import React, { useEffect, useState } from 'react';
import './detale.css';
import axios from 'axios';
import aviable from '../../assets/filterpageicons/Aviable.png';
import favorite from '../../assets/filterpageicons/fav.png';
import basket from '../../assets/filterpageicons/basket.png';
import chat from '../../assets/logo/message.png';
import circle from '../../assets/filterpageicons/dot.png';
import star from '../../assets/filterpageicons/rating4.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItemTocart } from '../../slices/cart/cart.slice';

const Detale = ({product, images}) => {
  const token = JSON.parse(localStorage.getItem('token'))

  const [selectedImage, setSelectedImage] = useState('');
  const dispatch = useDispatch()

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    setSelectedImage(images[0])
  },[product])
  
  const handleAddToCart = (id) => {
    dispatch(addItemTocart(id))
  }

  return (
    <div className='about_product_container'>
    <div className='about_product_container2'>
      <div className='image_container5'>
        <div className='main_image6'>
          <img src={!selectedImage? images[0] : selectedImage} alt='' />
        </div>

        <div className='small_images5'>
          {images.map((image,i) => {
            return <img key={i+986444267} src={image} alt='' onClick={() => handleImageClick(image)} />
          })}
        </div>
      </div>

      <div className='info_container'>
        <div className='info_1'>
          <img src={aviable} alt="" />
          <p>{product.name}</p>
        </div>

        <div className='info_2'>
          <div className='rating_star'>
            <img src={star} alt="" />
            <span className='star_span'>4.5</span>
          </div>

          <img src={circle} alt="" />
          <img src={chat} alt="" />
          <span>32 reviews</span>
          <img src={circle} alt="" />
          <img src={basket} alt="" />
          <span>154 sold</span>
        </div>

        <div className='info_3'>
          <div className='pink'>
            <div className='pink_box'> 
              <p>${product.price}</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>${Math.floor(product.price - ((product.price * 10) /100 ))}</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>${Math.floor(product.price - ((product.price * 20) /100 ))}</p>
              <span>50-100 pcs</span>
            </div>
          </div>
        </div>

        <div className='description_box'>

          <div className='prise_span_1'>
            <div className='spans_boxx'>
              <span className='span_text'>Price: </span>
              <span className='span_text2'>Negotiable </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Type:: </span>
              <span className='span_text2'>Classic  shoes </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Material: </span>
              <span className='span_text2'>Plastic material  </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Design: </span>
              <span className='span_text2'>Modern nice </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Customization: </span>
              <span className='span_text2'>Customized logo and design  </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Protection: </span>
              <span className='span_text2'>Refund Policy </span>
            </div>
            <div className='spans_boxx'>
              <span className='span_text'>Warranty: </span>
              <span className='span_text2'>2 years full warranty  </span>
            </div>
            
            <div className='add_cart_butt_cont'>
                <button onClick={() => {handleAddToCart(product.id)}}>Add To Cart</button>
                <img src={favorite} alt="" />

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  );
};

export default Detale;