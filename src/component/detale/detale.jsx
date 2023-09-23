import React, { useState } from 'react';
import './detale.css';
import product1 from '../../assets/prodact/shirt1.png';
import product3 from '../../assets/prodact/shirt2.png';
import aviable from '../../assets/filterpageicons/Aviable.png';
import favorite from '../../assets/filterpageicons/fav.png';
import basket from '../../assets/filterpageicons/basket.png';
import chat from '../../assets/prodacts/message.png';
import circle from '../../assets/filterpageicons/dot.png';
import star from '../../assets/filterpageicons/rating4.png';

const Detale = () => {

  const [selectedImage, setSelectedImage] = useState(product1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='about_product_container'>
       {/* // პროდუქტის შესახებ ინფორმაცია , სურათები და ფასი*/}
    <div className='about_product_container2'>
      <div className='image_container5'>
        <div className='main_image6'>
          <img src={selectedImage} alt='' />
        </div>

        <div className='small_images5'>
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
          <img src={product3} alt='' onClick={() => handleImageClick(product3)} />
        </div>
      </div>

      <div className='info_container'>
        <div className='info_1'>
          <img src={aviable} alt="" />
          <p>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
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
              <p>$98.00</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>$98.00</p>
              <span>50-100 pcs</span>
            </div>
            <div className='pink_box'> 
              <p>$98.00</p>
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
                <button>Add To Cart  </button>
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