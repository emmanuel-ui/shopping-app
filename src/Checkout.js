
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'; // You will need to create this component

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        <div>
            <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
