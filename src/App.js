
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import ProductCategories from './ProductCategories'; // Import the new sidebar component
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
  const [searchResults, setSearchResults] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const products = [
    {
      id: '12345678',
      title: 'The Lean StartUp:',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 3,
      category: 'Books',
    },
    {
      id: '12345680',
      title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345679',
      title: "Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor",
      price: 199,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345676',
      title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric',
      price: 98.99,
      image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345672',
      title: 'New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345667',
      title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
      price: 1094.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345678',
      title: 'The Lean StartUp:',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 3,
      category: 'Books',
    },
    {
      id: '12345680',
      title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345679',
      title: "Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor",
      price: 199,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345676',
      title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric',
      price: 98.99,
      image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345672',
      title: 'New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345667',
      title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
      price: 1094.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345678',
      title: 'The Lean StartUp:',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 3,
      category: 'Books',
    },
    {
      id: '12345680',
      title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345679',
      title: "Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor",
      price: 199,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345676',
      title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric',
      price: 98.99,
      image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345672',
      title: 'New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345667',
      title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
      price: 1094.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345678',
      title: 'The Lean StartUp:',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 3,
      category: 'Books',
    },
    {
      id: '12345680',
      title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: 29.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    {
      id: '12345679',
      title: "Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor",
      price: 199,
      image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345676',
      title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric',
      price: 98.99,
      image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345672',
      title: 'New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 3,
      category: 'Electronics',
    },
    {
      id: '12345667',
      title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
      price: 1094.99,
      image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
      rating: 5,
      category: 'Electronics',
    },
    // Your products data here...
  ];

    // Function to chunk products into arrays of 4 items each
    // const chunkProducts = (arr, size) =>
    //   Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    //     arr.slice(index * size, index * size + size)
    //   );
  
    // // Chunk products into rows with a maximum of 4 items per row
    // const rowsOfProducts = chunkProducts(searchResults.length > 0 ? searchResults : filteredProducts.length > 0 ? filteredProducts : products, 4);
  
    useEffect(() => {
      if (searchResults.length > 0) {
        setFilteredProducts(searchResults);
      } else {
        setFilteredProducts(products);
      }
    }, [searchResults, products]);
  

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

  const handleSearchResults = (query) => {
    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header setSearchResults={handleSearchResults} />
        <Routes>
          <Route path="/" element={<MainLayout><Home searchResults={searchResults} /></MainLayout>} />
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




