

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
//     // Check if products is null or undefined, handle appropriately
//     if (!products) {
//       return;
//     }

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
//               <a href="#" onClick={() => handlePriceRangeChange('under50')}>Under Ksh50</a>
//               <a href="#" onClick={() => handlePriceRangeChange('50to100')}>Ksh50 - Ksh100</a>
//               <a href="#" onClick={() => handlePriceRangeChange('over100')}>Over Ksh100</a>
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
  const [isPriceDropdownVisible, setIsPriceDropdownVisible] = useState(false);

  const handleCategoryChange = (event, category) => {
    event.preventDefault();
    setSelectedCategory(category);
    filterProducts(category, selectedPriceRange);
    setIsSidebarVisible(false); // Close sidebar after selection
  };

  const handlePriceRangeChange = (event, range) => {
    event.preventDefault();
    setSelectedPriceRange(range);
    filterProducts(selectedCategory, range);
    setIsSidebarVisible(false); // Close sidebar after selection
  };

  const filterProducts = (category, priceRange) => {
    if (!products) {
      return;
    }

    let filtered = [...products];

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

    setFilteredProducts(filtered);
  };

  return (
    <div className="sidebar-container">
      <div className="category-icon" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        <span className="dropdown-icon">&#9662;</span> {/* Downward arrow icon */}
      </div>
      {isSidebarVisible && (
        <div className="sidebar">
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsCategoryDropdownVisible(!isCategoryDropdownVisible)}>
              Categories
            </div>
            {isCategoryDropdownVisible && (
              <div className="dropdown-content">
                <a href="#" onClick={(e) => handleCategoryChange(e, null)}>All</a>
                <a href="#" onClick={(e) => handleCategoryChange(e, 'Electronics')}>Electronics</a>
                <a href="#" onClick={(e) => handleCategoryChange(e, 'Books')}>Books</a>
                {/* Add more categories as needed */}
              </div>
            )}
          </div>
          <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsPriceDropdownVisible(!isPriceDropdownVisible)}>
              Price Range
            </div>
            {isPriceDropdownVisible && (
              <div className="dropdown-content">
                <a href="#" onClick={(e) => handlePriceRangeChange(e, null)}>All</a>
                <a href="#" onClick={(e) => handlePriceRangeChange(e, 'under50')}>Under Ksh50</a>
                <a href="#" onClick={(e) => handlePriceRangeChange(e, '50to100')}>Ksh50 - Ksh100</a>
                <a href="#" onClick={(e) => handlePriceRangeChange(e, 'over100')}>Over Ksh100</a>
                {/* Add more price ranges as needed */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;




  