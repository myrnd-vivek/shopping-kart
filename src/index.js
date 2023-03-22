import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { FilterProvider } from './context/filter_context';
import { ProductProvider } from './context/products_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App /> 
      </FilterProvider>
    </ProductProvider>
  // </React.StrictMode>
);
