import React from 'react';
import './checkout.css';
import american from '../../assets/prodacts/american.png';
import visa from '../../assets/prodacts/visa.png';
import mastercard from '../../assets/prodacts/mastercard.png';
import applepay from '../../assets/prodacts/applepay.png';
import paypal from '../../assets/prodacts/paypal.png';



const Checkout = ({cartProducts}) => {
  
  
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartProducts) {
      totalPrice += item.price; 
    }
    return totalPrice.toFixed(2);
  };
  
  const subtotal = calculateTotalPrice();
  const discount = ((subtotal * 10)/100);
  const tax = ((subtotal * 2)/100) ;
  
  const totalPrice = subtotal - discount + tax;
  
  return (
    <div className="checkout_container">
      <div className="cupon_container">
        <span>have a coupon? </span>
        <div className="cuppon_apply">
          <input type="text" name="" id="" placeholder="Add coupon" />
          <button>Apply</button>
        </div>
      </div>

      <div className="total_container">
        <div className="total">
          <span className="subtotal_span">Subtotal:</span>
          <span className="total_span1">${calculateTotalPrice()}</span>
        </div>
        <div className="total">
          <span className="subtotal_span">discount:</span>
          <span className="total_span2">$- {discount.toFixed(2)}</span>
        </div>
        <div className="total">
          <span className="subtotal_span">tax:</span>
          <span className="total_span3">+ ${tax.toFixed(2)}</span>
        </div>
        <div className="total_2">
          <span className="subtotal_span2">Total:</span>
          <span className="total_span4">$ {totalPrice.toFixed(2)}</span>
        </div>
        <button>checkout</button>
        <div className="card_container">
          <img src={american} alt="american" />
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={applepay} alt="applepay" />
          <img src={paypal} alt="paypal" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
