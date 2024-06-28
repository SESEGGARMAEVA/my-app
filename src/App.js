import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [cart, setCart] = useState([]);

  const cartSum = cart.reduce((acc, item) => acc + item.price, 0);
  const menu = [
    {
      name: "Tteokbokki",
      price: 674,
      image: "https://n1s1.hsmedia.ru/35/ca/3f/35ca3f9bf3419c0fb49b1203d38fe2fc/1280x1280_0xO8faF4jO_5583004080527022632.jpg",
      description: "Острые рисовые палочки в насыщенном ароматном соусе."
    },

    {
      name: "Kimchi",
      price: 548,
      image: "https://korfood.ru/upload/iblock/4a0/z5d19idqctzxu3d266pt09vn4bfrrbqi/gotovim_kimchi_po_koreyski.jpg",
      description: "Кимчи из пекинской капусты, заправленный пастой из трав."
    },

    {
      name: "Bulgogi",
      price: 776,
      image: "https://static.1000.menu/img/content-v2/9c/89/39026/pulkogi-iz-govyadiny_1568882821_1_max.jpg",
      description: "Блюдо из тонких маринованных ломтиков говядины и свинины."
    }
  ];

  return (
    <div className="App">
      <div className="cart-card">
        <h2>Корзина:</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li>
                  {item.name} - {item.price} руб
                </li>
              ))}
            </ul>
            <div className="cart-next">
              <button> Далее {cartSum} руб</button>
            </div>
          </>
        ) : (
          <div className="cart-empty"> В вашей корзине пока пусто </div>
        )}
      </div>

      <h1>Популярные блюда</h1>
      <div className="menu">
        {menu.map(function (item) {
          return (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <div>Цена: {item.price} руб</div>
              <p>{item.description}</p>

              <button
                style={{
                  fontSize: "20px",
                  width: "95%",
                  borderRadius: "5px",
                  backgroundColor: "green",
                  margin: "15px 20px 0 5px",
                  padding: "10px 20px",
                  marginTop: "20"

                }}
                onClick={() => {
                  setCart([...cart, item]);
                }}
              >
                Добавить в корзину
              </button>

              <div className="buttons">
                {/* <Button
                  text="В корзину"
                  style={{
                    fontSize: "20px",
                    width: "40%",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "orang",
                    marginRight: "25px"
                  }}
                /> */}
                {/*<Button
                  text="Купить"
                  style={{
                    fontSize: "20px",
                    width: "40%",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "green",
                    marginRight: "25px"
                  }}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default App;
