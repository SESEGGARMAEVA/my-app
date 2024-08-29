import { useParams } from "react-router-dom";
import { useCart } from "../store/cart";
import { useMenuReactQuery } from "../store/menu";


export function ProductPage() {
    //const { menu } = useMenu();
    const { addItem } = useCart();
    const { productId } = useParams();

    const { data, isLoading } = useMenuReactQuery();
    const product = data ? data.find((item) => item.name === productId) : null;
    return (
        <div>
            {isLoading && <div>Загрузка...</div>}
            {!!product && (
            <>
            <img src={product.image} alt={product.name} />
            <h1>Страница товара {product.name}</h1>
            <p>{product.price} руб</p>
            <button onClick={() => addItem(product)}>Купить</button>
            </>
            )}
        </div>
    );
} 
