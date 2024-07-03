

import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCategories from './ProductCategories';

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="main-content">
      {location.pathname === '/' && <ProductCategories />}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

