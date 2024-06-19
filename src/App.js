import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';

function App() {
  const menu = [
    {
      name: "Tteokbokki",
      image: "https://n1s1.hsmedia.ru/35/ca/3f/35ca3f9bf3419c0fb49b1203d38fe2fc/1280x1280_0xO8faF4jO_5583004080527022632.jpg",
      description: "Острые корейские рисовые палочки в насыщенном ароматном соусе."
    },

    {
      name: "Kimchi",
      image: "https://korfood.ru/upload/iblock/4a0/z5d19idqctzxu3d266pt09vn4bfrrbqi/gotovim_kimchi_po_koreyski.jpg",
      description: "Самый распространённый кимчи из пекинской капусты, заправленный специальной пастой из трав."
    },

    {
      name: "Bulgogi",
      image: "https://static.1000.menu/img/content-v2/9c/89/39026/pulkogi-iz-govyadiny_1568882821_1_max.jpg",
      description: "Блюдо готовится из тонких маринованных ломтиков говядины и свинины."
    }
  ];
  return (
    <div className="App">
      <h1>Меню</h1>
      <div className="menu">
        {menu.map(function (item) {
          return (
            <div className="card">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="buttons">
                <Button
                  text="В корзину"
                  style={{
                    fontSize: "20px",
                    width: "40%",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "orange",
                    marginRight: "25px"
                  }}
                />
                <Button
                  text="Купить"
                  style={{
                    fontSize: "20px",
                    width: "40%",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "green",
                    marginRight: "25px"
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default App;
