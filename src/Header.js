
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import ForIvaLogo from './image/ForIva Logo.png';


function Header() {
  const [{ basket, user }] = useStateValue();
  const [basketAnimation, setBasketAnimation] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  // Function to trigger animation when items are added to the basket
  const animateBasket = () => {
    setBasketAnimation(true);
    setTimeout(() => {
      setBasketAnimation(false);
    }, 500); // Duration of the animation, adjust as needed
  };

  // Listen for changes in basket and trigger animation
  useEffect(() => {
    if (basket.length > 0) {
      animateBasket();
    }
  }, [basket]);

  return (
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src={ForIvaLogo} alt='ForIva Logo' />

      </Link>

      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && '/signin'} style={{ textDecoration: 'none' }}>
          <div className='header_option' onClick={handleAuthentication}>
            <span className='header_OptionLineOne'>
              {user ? user.email : 'Hello Guest'}
            </span>
            <span className='header_OptionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className='header_option'>
          <span className='header_OptionLineOne'>Returns</span>
          <span className='header_OptionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_OptionLineOne'>Your</span>
          <span className='header_OptionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='header_optionBasket' onClick={animateBasket}>
            <ShoppingBasketIcon className={basketAnimation ? 'basketAnimation' : ''} />
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;


