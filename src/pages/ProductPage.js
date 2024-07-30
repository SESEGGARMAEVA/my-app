import { useParams } from "react-router-dom";
import { menu } from "../menu";
import { useCart } from "../store/cart";


export function ProductPage() {
    const { addItem } = useCart()
    const { productId } = useParams();
    const product = menu.find((item) => item.name === productId);
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h1>Страница товара {product.name}</h1>
            <p>{product.price} руб</p>
            <button onClick={() => addItem(product)}>Купить</button>
        </div>
    );
} 
