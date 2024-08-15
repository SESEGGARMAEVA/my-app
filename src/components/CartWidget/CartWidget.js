import { useCart } from "../../store/cart";
import { Link } from "react-router-dom";
import { CartSvg } from "../../svg/CartSvg";

export function CartWidget() {
    const { cart, setCart, removeItem } = useCart()
    return (
        <div>
            <Link to="cart">
                <div className="relative">
                    <CartSvg className="w-8 h-8" />
                    {cart.length > 0 && (
                        <div className="absolute -top-[3px] left-[3.5px] bg-red-400 text-white w-5 h-5 flex justify-center items-center rounded-full fond-bold">
                            {cart.length}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}