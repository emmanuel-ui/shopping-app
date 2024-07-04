
import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'; // Adjust the import path as necessary
import axios from 'axios';

function Payment() {
  const [{ basket, user }] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const totalAmount = getBasketTotal(basket); // Calculate total amount from basket

  const handleMpesaSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const response = await axios.post('http://localhost:3001/mpesa/payment', {
        phoneNumber,
        amount: totalAmount,
      });
      console.log(response.data);
      setSucceeded(true);
      setError(null);
      setProcessing(false);
    } catch (error) {
      console.error('Payment Error:', error);
      setError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
    setDisabled(!event.target.value);
  };

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123-00100, Nairobi</p>
            <p>Kenya</p>
          </div>
        </div>

        {/* Payment section - Review items */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - payment method */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            <form onSubmit={handleMpesaSubmit}>
              <div className='mpesa_payment'>
                <h4>M-Pesa Payment</h4>
                <input
                  type='text'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className='payment_priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={totalAmount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Ksh'}
                />
                <button
                  disabled={processing || disabled || succeeded}
                  type='submit'
                >
                  <span>{processing ? <p>Processing</p> : 'Pay with M-Pesa'}</span>
                </button>
              </div>

              {/* Show any error that happens when processing the payment */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;



