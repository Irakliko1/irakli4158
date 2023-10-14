import React from 'react';
import './checkout.css';
import american from '../../assets/prodacts/american.png';
import visa from '../../assets/prodacts/visa.png';
import mastercard from '../../assets/prodacts/mastercard.png';
import applepay from '../../assets/prodacts/applepay.png';
import paypal from '../../assets/prodacts/paypal.png';



const Checkout = () => {
  const subtotal = 500;
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
          <span className="total_span1">${subtotal}</span>
        </div>
        <div className="total">
          <span className="subtotal_span">discount:</span>
          <span className="total_span2">$- {discount}</span>
        </div>
        <div className="total">
          <span className="subtotal_span">tax:</span>
          <span className="total_span3">+ ${tax}</span>
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
