import { useCart } from "../../store/cart";
import { Link } from "react-router-dom";
import { CartSvg } from "../../svg/CartSvg";
import { useEffect, useState } from "react";

export function CartWidget() {
    const { cart, setCart, removeItem } = useCart()
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        setChanged(true);
        setTimeout(() => {
            setChanged(false)
        }, 300);
    }, [cart]);
    return (
        <div>
            <Link to="cart">
                <div className="relative">
                    <CartSvg className="w-8 h-8" />
                    {cart.length > 0 && (
                        <div className={"absolute -top-2 -right-2 bg-red-400 text-smtext-white w-5 h-5 flex justify-center items-center rounded-full fond-bold transition " + 
                        (changed ? "scale-[150%]" : "scale-[100%]")}>
                            {cart.length}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}