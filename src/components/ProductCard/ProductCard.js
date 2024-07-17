import { useCart } from "../../store/cart";
import style from "./ProductCard.module.css";


export function ProductCard({ item }) {
    const { addItem } = useCart();
    return (
        <div className={style.card} >
            <img src={item.image} alt={item.name} className={style.image} />
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