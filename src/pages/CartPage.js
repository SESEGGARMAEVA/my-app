import { Link } from 'react-router-dom';
import { useCart } from '../store/cart';

export function CartPage() {
    const { cart, setCart, removeItem } = useCart()
    return (
        <div>
            <h2>Корзина:</h2>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.name} >
                                {item.name} - {item.price} руб
                                <button onClick={() => removeItem(item)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-next">
                        {/* <button> Далее {cartSum} руб</button> */}
                        <Link to={ "/checkout" }>Оформить заказ</Link>
                    </div>
                </>
            ) : (
                <div className="cart-empty"> В вашей корзине пока пусто </div>
            )}
        </div>
    )
}