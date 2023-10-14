import React, { useState } from 'react';
import './slider.css'; // Custom CSS for styling the price range slider

function PriceRangeSlider() {
  const [minPrice, setMinPrice] = useState(0); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(1000); // Initial maximum price

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
        max={2000} // Set your desired max price
        step={10} // Set the step interval
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <input
        type="range"
        min={0}
        max={2000} // Set your desired max price
        step={10} // Set the step interval
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
