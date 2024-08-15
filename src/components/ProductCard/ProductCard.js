import { Link } from "react-router-dom";
import { useCart } from "../../store/cart";
import { CartSvg } from "../../svg/CartSvg";


export function ProductCard({ item }) {
    const { addItem } = useCart();
    return (

        <div className=" shadow rounded-lg overflow-hidden hoder=shadow-2xl transition duration-500" >
            <Link to={`products/${item.name}`} >
                <div className="overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full hover:scale-[110%] transition duration-500" />
                </div>
            </Link>

            <div className="flex justify-between p-3 items-center">
                <h2 className="font-bold">{item.name}</h2>
                <div className="flex gap-2 items-center">
                    <div>Цена: {item.price} руб</div>
                    <button
                        onClick={() => {
                            addItem(item);
                        }}
                        className="bg-green-500 p-2 rounded hover:bg-green-300 transition"
                    >
                        <CartSvg className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
            <p>{item.description}</p>
        </div>
    )
}