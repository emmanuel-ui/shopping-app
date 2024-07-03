


// import React from 'react';
// import './ProductCategories.css';

// const ProductCategories = () => {
//   return (
//     <div className="sidebar-container">
//       <div className="category-icon">
//         <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
//       </div>
//       <div className="sidebar">
//         <div className="dropdown-container">
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Categories
//             </div>
//             <div className="dropdown-content">
//               <a href="#">Electronics</a>
//               <a href="#">Clothing</a>
//               <a href="#">Books</a>
//             </div>
//           </div>
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Price Range
//             </div>
//             <div className="dropdown-content">
//               <a href="#">Under $50</a>
//               <a href="#">$50 - $100</a>
//               <a href="#">Over $100</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;


// import React, { useState } from 'react';
// import './ProductCategories.css';

// const ProductCategories = ({ products, setFilteredProducts }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState(null);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     filterProducts(category, selectedPriceRange);
//   };

//   const handlePriceRangeChange = (range) => {
//     setSelectedPriceRange(range);
//     filterProducts(selectedCategory, range);
//   };

//   const filterProducts = (category, priceRange) => {
//     let filtered = products;

//     if (category) {
//       filtered = filtered.filter(product => product.category === category);
//     }

//     if (priceRange) {
//       // Implement price range filtering logic here
//       // Example: split range and compare with product price
//     }

//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="category-icon">
//         <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
//       </div>
//       <div className="sidebar">
//         <div className="dropdown-container">
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Categories
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handleCategoryChange(null)}>All</a>
//               <a href="#" onClick={() => handleCategoryChange('Electronics')}>Electronics</a>
//               <a href="#" onClick={() => handleCategoryChange('Books')}>Books</a>
//               {/* Add more categories as needed */}
//             </div>
//           </div>
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Price Range
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handlePriceRangeChange(null)}>All</a>
//               <a href="#" onClick={() => handlePriceRangeChange('under50')}>Under $50</a>
//               <a href="#" onClick={() => handlePriceRangeChange('50to100')}>$50 - $100</a>
//               <a href="#" onClick={() => handlePriceRangeChange('over100')}>Over $100</a>
//               {/* Add more price ranges as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;


// import React, { useState } from 'react';
// import './ProductCategories.css';

// const ProductCategories = ({ products, setFilteredProducts }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState(null);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     filterProducts(category, selectedPriceRange);
//   };

//   const handlePriceRangeChange = (range) => {
//     setSelectedPriceRange(range);
//     filterProducts(selectedCategory, range);
//   };

//   const filterProducts = (category, priceRange) => {
//     let filtered = products;

//     if (category) {
//       filtered = filtered.filter(product => product.category === category);
//     }

//     if (priceRange) {
//       switch (priceRange) {
//         case 'under50':
//           filtered = filtered.filter(product => product.price < 50);
//           break;
//         case '50to100':
//           filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
//           break;
//         case 'over100':
//           filtered = filtered.filter(product => product.price > 100);
//           break;
//         default:
//           break;
//       }
//     }

//     // Ensure setFilteredProducts is a function before calling it
//     if (typeof setFilteredProducts === 'function') {
//       setFilteredProducts(filtered);
//     }
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="category-icon">
//         <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
//       </div>
//       <div className="sidebar">
//         <div className="dropdown-container">
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Categories
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handleCategoryChange(null)}>All</a>
//               <a href="#" onClick={() => handleCategoryChange('Electronics')}>Electronics</a>
//               <a href="#" onClick={() => handleCategoryChange('Books')}>Books</a>
//               {/* Add more categories as needed */}
//             </div>
//           </div>
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Price Range
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handlePriceRangeChange(null)}>All</a>
//               <a href="#" onClick={() => handlePriceRangeChange('under50')}>Under $50</a>
//               <a href="#" onClick={() => handlePriceRangeChange('50to100')}>$50 - $100</a>
//               <a href="#" onClick={() => handlePriceRangeChange('over100')}>Over $100</a>
//               {/* Add more price ranges as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;


// import React, { useState } from 'react';
// import './ProductCategories.css';

// const ProductCategories = ({ products, setFilteredProducts }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState(null);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     filterProducts(category, selectedPriceRange);
//   };

//   const handlePriceRangeChange = (range) => {
//     setSelectedPriceRange(range);
//     filterProducts(selectedCategory, range);
//   };

//   const filterProducts = (category, priceRange) => {
//     let filtered = [...products]; // Make a copy of products array

//     if (category) {
//       filtered = filtered.filter(product => product.category === category);
//     }

//     if (priceRange) {
//       switch (priceRange) {
//         case 'under50':
//           filtered = filtered.filter(product => product.price < 50);
//           break;
//         case '50to100':
//           filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
//           break;
//         case 'over100':
//           filtered = filtered.filter(product => product.price > 100);
//           break;
//         default:
//           break;
//       }
//     }

//     // Update filtered products in parent component
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="sidebar-container">
//       <div className="category-icon">
//         <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
//       </div>
//       <div className="sidebar">
//         <div className="dropdown-container">
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Categories
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handleCategoryChange(null)}>All</a>
//               <a href="#" onClick={() => handleCategoryChange('Electronics')}>Electronics</a>
//               <a href="#" onClick={() => handleCategoryChange('Books')}>Books</a>
//               {/* Add more categories as needed */}
//             </div>
//           </div>
//           <div className="dropdown">
//             <div className="dropdown-header">
//               Price Range
//             </div>
//             <div className="dropdown-content">
//               <a href="#" onClick={() => handlePriceRangeChange(null)}>All</a>
//               <a href="#" onClick={() => handlePriceRangeChange('under50')}>Under $50</a>
//               <a href="#" onClick={() => handlePriceRangeChange('50to100')}>$50 - $100</a>
//               <a href="#" onClick={() => handlePriceRangeChange('over100')}>Over $100</a>
//               {/* Add more price ranges as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;


import React, { useState } from 'react';
import './ProductCategories.css';

const ProductCategories = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, selectedPriceRange);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    filterProducts(selectedCategory, range);
  };

  const filterProducts = (category, priceRange) => {
    // Check if products is null or undefined, handle appropriately
    if (!products) {
      return;
    }

    let filtered = [...products]; // Make a copy of products array

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      switch (priceRange) {
        case 'under50':
          filtered = filtered.filter(product => product.price < 50);
          break;
        case '50to100':
          filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case 'over100':
          filtered = filtered.filter(product => product.price > 100);
          break;
        default:
          break;
      }
    }

    // Update filtered products in parent component
    setFilteredProducts(filtered);
  };

  return (
    <div className="sidebar-container">
      <div className="category-icon">
        <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
      </div>
      <div className="sidebar">
        <div className="dropdown-container">
          <div className="dropdown">
            <div className="dropdown-header">
              Categories
            </div>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleCategoryChange(null)}>All</a>
              <a href="#" onClick={() => handleCategoryChange('Electronics')}>Electronics</a>
              <a href="#" onClick={() => handleCategoryChange('Books')}>Books</a>
              {/* Add more categories as needed */}
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-header">
              Price Range
            </div>
            <div className="dropdown-content">
              <a href="#" onClick={() => handlePriceRangeChange(null)}>All</a>
              <a href="#" onClick={() => handlePriceRangeChange('under50')}>Under Ksh50</a>
              <a href="#" onClick={() => handlePriceRangeChange('50to100')}>Ksh50 - Ksh100</a>
              <a href="#" onClick={() => handlePriceRangeChange('over100')}>Over Ksh100</a>
              {/* Add more price ranges as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;



  