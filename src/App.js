import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard/ProductCard';
import { CartWidget } from './components/CartWidget/CartWidget';
import { menu } from './menu';


function App() {
  return (
    <div className="App">
      <div className="cart-card">
        <h1>Корейские блюда</h1>
        <CartWidget />
        <div className="menu">
          {menu.map((item) => (
            <ProductCard item={item} key={item.name} />
          ))}
        </div>

      </div>
    </div >
  );
}



export default App;
