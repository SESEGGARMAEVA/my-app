import { Link } from "react-router-dom";
import { useCart } from "../../store/cart";
import style from "./ProductCard.module.css";


export function ProductCard({ item }) {
    const { addItem } = useCart();
    return (

        <div className={style.card} >
            <Link to={`products/${item.name}`}>
                <img src={item.image} alt={item.name} className={style.image} />
            </Link>
            <h2>{item.name}</h2>
            <div>Цена: {item.price} руб</div>
            <p>{item.description}</p>

            <button
                className={style.button}
                onClick={() => {
                    addItem(item);
                }}
            >
                Добавить в корзину
            </button>
        </div>
    )
}