import React, { useState } from 'react';
import './slider.css'; 

function PriceRangeSlider() {
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState(1000); 

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <div className="price-range-slider">
      <input
        type="range"
        min={0}
        max={2000} 
        step={10} 
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <input
        type="range"
        min={0}
        max={2000}
        step={10} 
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
      <div className="slider-values">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
