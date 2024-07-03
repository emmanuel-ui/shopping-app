// import React from 'react'
// import './Home.css'
// import backgroundImage from './image/ecommerce.jpg' // Import the image
// import Product from './Product'

// function Home() {
//   return (
//     <div className='home'>
//         <div className='home_container'>
//         <img className='home_image' src={backgroundImage} alt="Background" />

//         <div className='home_row'>
//             < Product
//             id='12345678'  
//             title='The Lean StartUp:' 
//             price={29.99} 
//             image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
//             rating={3}
//              />

//             < Product 
//             id='12345680'  
//             title='Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
//             price={29.99} 
//             image=' https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
//             rating={5}  />
            
//         </div>

//         <div className='home_row'>
//         < Product
//         id='12345679'  
//         title="Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor" 
//         price={199} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
//         rating={3}  />
//         < Product
//         id='12345676'  
//         title='Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric' 
//         price={98.99} 
//         image=' https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg'
//         rating={3}  />
//         < Product
//         id='12345672'  
//         title='New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
//         price={598.99} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
//         rating={3}  />
//         </div>

//         <div className='home_row'>
//         < Product
//         id='12345667'  
//         title='Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' 
//         price={1094.99} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
//         rating={5}  />
        
//         </div>

//         <div className='home_row'>
//             < Product
//             id='12345678'  
//             title='The Lean StartUp:' 
//             price={29.99} 
//             image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
//             rating={3}
//              />

//             < Product 
//             id='12345680'  
//             title='Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
//             price={29.99} 
//             image=' https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
//             rating={5}  />
            
//         </div>

//         <div className='home_row'>
//         < Product
//         id='12345679'  
//         title="Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor" 
//         price={199} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
//         rating={3}  />
//         < Product
//         id='12345676'  
//         title='Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric' 
//         price={98.99} 
//         image=' https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg'
//         rating={3}  />
//         < Product
//         id='12345672'  
//         title='New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
//         price={598.99} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
//         rating={3}  />
//         </div>

//         <div className='home_row'>
//         < Product
//         id='12345667'  
//         title='Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' 
//         price={1094.99} 
//         image=' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
//         rating={5}  />
        
//         </div>

//         </div>
//     </div>
//   )
// }

// export default Home


// // import React, { useState } from 'react';
// // import './Home.css';
// // import backgroundImage from './image/ecommerce.jpg'; // Import the image
// // import Product from './Product';

// // function Home() {
// //     const [selectedCategory, setSelectedCategory] = useState(null);
// //     const [selectedPriceRange, setSelectedPriceRange] = useState(null);

// //     const handleCategoryChange = (category) => {
// //         setSelectedCategory(category);
// //         // Implement filtering logic here based on selected category
// //     };

// //     const handlePriceRangeChange = (range) => {
// //         setSelectedPriceRange(range);
// //         // Implement filtering logic here based on selected price range
// //     };

// //     // Dummy data for products (replace with your actual data or fetch from an API)
// //     const products = [
// //         {
// //             id: '12345678',
// //             title: 'The Lean StartUp:',
// //             price: 29.99,
// //             image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //             rating: 3,
// //             category: 'Books',
// //         },
// //         {
// //             id: '12345680',
// //             title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
// //             price: 29.99,
// //             image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //             rating: 5,
// //             category: 'Electronics',
// //         },
// //         {
// //           id: '12345667',  
// //          title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440', 
// //          price: 1094.99, 
// //          image: ' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
// //         rating: 5,
// //         },
// //         {
// //           id: '12345678',
// //           title: 'The Lean StartUp:',
// //           price: 29.99,
// //           image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //           rating: 3,
// //           category: 'Books',
// //       },
// //       {
// //           id: '12345680',
// //           title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
// //           price: 29.99,
// //           image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //           rating: 5,
// //           category: 'Electronics',
// //       },
// //       {
// //         id: '12345667',  
// //        title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440', 
// //        price: 1094.99, 
// //        image: ' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
// //       rating: 5,
// //       },
// //       {
// //         id: '12345678',
// //         title: 'The Lean StartUp:',
// //         price: 29.99,
// //         image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //         rating: 3,
// //         category: 'Books',
// //     },
// //     {
// //         id: '12345680',
// //         title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
// //         price: 29.99,
// //         image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //         rating: 5,
// //         category: 'Electronics',
// //     },
// //     {
// //       id: '12345667',  
// //      title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440', 
// //      price: 1094.99, 
// //      image: ' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
// //     rating: 5,
// //     },
// //     {
// //       id: '12345678',
// //       title: 'The Lean StartUp:',
// //       price: 29.99,
// //       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //       rating: 3,
// //       category: 'Books',
// //   },
// //   {
// //       id: '12345680',
// //       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
// //       price: 29.99,
// //       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
// //       rating: 5,
// //       category: 'Electronics',
// //   },
// //   {
// //     id: '12345667',  
// //    title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440', 
// //    price: 1094.99, 
// //    image: ' https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
// //   rating: 5,
// //   },

// //         // Add more products as needed
// //     ];

// //     // Filter products based on selected category and price range
// //     const filteredProducts = products.filter((product) => {
// //         if (selectedCategory && product.category !== selectedCategory) {
// //             return false;
// //         }
// //         if (selectedPriceRange) {
// //             // Implement price range filtering logic
// //             // Example: split range and compare with product price
// //         }
// //         return true;
// //     });

// //     return (
// //         <div className="home">
// //             <div className="home_container">
// //                 <img className="home_image" src={backgroundImage} alt="Background" />

// //                 <div className="home_row">
// //                     {filteredProducts.map((product) => (
// //                         <Product
// //                             key={product.id}
// //                             id={product.id}
// //                             title={product.title}
// //                             price={product.price}
// //                             image={product.image}
// //                             rating={product.rating}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;


// import React, { useState } from 'react';
// import './Home.css';
// import backgroundImage from './image/ecommerce.jpg'; // Import the image
// import Product from './Product';
// import ProductCategories from './ProductCategories'; // Import ProductCategories

// function Home() {
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Dummy data for products (replace with your actual data or fetch from an API)
//   const products = [
//     {
//       id: '12345678',
//       title: 'The Lean StartUp:',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 3,
//       category: 'Books',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },

//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },

//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },

//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Books',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Books',
//     },
//     // Add more products as needed
//   ];

//   return (
//     <div className='home'>
//       <div className='home_container'>
//         <img className='home_image' src={backgroundImage} alt="Background" />
        
//         <ProductCategories products={products} setFilteredProducts={setFilteredProducts} />

//         <div className='home_row'>
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 image={product.image}
//                 rating={product.rating}
//               />
//             ))
//           ) : (
//             products.map((product) => (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 image={product.image}
//                 rating={product.rating}
//               />
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


// import React, { useState } from 'react';
// import './Home.css';
// import backgroundImage from './image/ecommerce.jpg'; // Import the image
// import Product from './Product';
// import ProductCategories from './ProductCategories'; // Import ProductCategories

// function Home() {
//   const [filteredProducts, setFilteredProducts] = useState([]);
  
//   // Dummy data for products (replace with your actual data or fetch from an API)
//   const products = [
//     {
//       id: '12345678',
//       title: 'The Lean StartUp:',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 3,
//       category: 'Books',
//     },
//     {
//       id: '12345680',
//       title: 'Kenwood kMix Stand Mixer for baking, stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
//       price: 29.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },
//     {
//       id: '12345679',
//       title: "Samsung LC49RG90SSUXEN 49' Curved  Led Gaming Monitor",
//       price: 199,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
//       rating: 3,
//       category: 'Electronics',
//     },
//     {
//       id: '12345676',
//       title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric',
//       price: 98.99,
//       image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg',
//       rating: 3,
//       category: 'Electronics',
//     },
//     {
//       id: '12345672',
//       title: 'New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
//       price: 598.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
//       rating: 3,
//       category: 'Electronics',
//     },
//     {
//       id: '12345667',
//       title: 'Samsung LC49RG90SSUXEN 49 Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440',
//       price: 1094.99,
//       image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
//       rating: 5,
//       category: 'Electronics',
//     },
//   ];

//   return (
//     <div className='home'>
//       <div className='home_container'>
//         <img className='home_image' src={backgroundImage} alt="Background" />
        
//         <ProductCategories products={products} setFilteredProducts={setFilteredProducts} />

//         {/* Partitioned display of products */}
//         <div className='home_row'>
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 image={product.image}
//                 rating={product.rating}
//               />
//             ))
//           ) : (
//             products.map((product) => (
//               <Product
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 image={product.image}
//                 rating={product.rating}
//               />
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import './Home.css';
import backgroundImage from './image/ecommerce.jpg'; // Import the image
import Product from './Product';
import ProductCategories from './ProductCategories'; // Import ProductCategories

function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Dummy data for products (replace with your actual data or fetch from an API)
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
    // Add more products as needed
  ];

  // Function to chunk products into arrays of 4 items each
  const chunkProducts = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );

  // Chunk products into rows with a maximum of 4 items per row
  const rowsOfProducts = chunkProducts(filteredProducts.length > 0 ? filteredProducts : products, 4);

  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={backgroundImage} alt="Background" />
        
        <ProductCategories products={products} setFilteredProducts={setFilteredProducts} />

        {/* Partitioned display of products */}
        {rowsOfProducts.map((row, index) => (
          <div key={index} className='home_row'>
            {row.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;




