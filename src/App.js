
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './App.css';
import SignIn from './SignIn';
import Checkout from './Checkout';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import MainLayout from './MainLayout'; // Import MainLayout

const promise = loadStripe('pk_test_51PTLgO05oAhMKKUfv6a1xypMi14SpnnqQCZt547fkrrt3PKTuU5uFpgJ57XjhIoI7VpoWsTvfLJdePoKSwxuu1pn00bQ386uJK');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

