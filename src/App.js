import React from 'react';
 import ProductPage from './Components/ProductPage/ProductPage';
 import Navbar from "./Components/Navbar/Navbar";
 import Dashboard from './Components/Dashboard/Dashboard';
 import ProductGrid from './Components/ProductGrid/ProductGrid';
  
 import './App.css';

function App() {
  return (
    <div>
       <Navbar />
       <ProductPage />
        <Dashboard/>
        <ProductGrid/>
     </div>
  );
}

export default App;

