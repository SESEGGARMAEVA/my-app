import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard/ProductCard';
import { menu } from './menu';


function App() {
  return (
    <div className="App container mx-auto flex flex-col gap-4 py-4">
      <div className="cart-card">
        <h1 className="text--lg">Меню ресторана CLOVER</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {menu.map((item) => (
            <ProductCard item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div >
  );
}



export default App;
