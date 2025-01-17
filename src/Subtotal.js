
import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';



function Subtotal() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Payment'); // Replace '/target-route' with your desired path
  };


  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Ksh'}
      />
      <button onClick= {handleClick}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

