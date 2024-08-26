import { Link } from "react-router-dom";
import { useCart } from "../../store/cart";
import { CartSvg } from "../../svg/CartSvg";
import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";


export function ProductCard({ item }) {
    const { addItem } = useCart();
    const [clicked, setCliked] = useState(false);
    return (
        <div className="relative shadow rounded-lg overflow-hidden hover=shadow-2xl transition duration-500" >
            <Link to={`products/${item.name}`}>
                <div className="overflow-hidden aspect-square">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-[110%] transition duration-500" />
                </div>

                <div className="absolute bottom-0 flex justify-between p-3 items-center w-full text-white bg-[linear-gradient(to_top,#000000,rgba(0,0,0,0))]">
                    <h2 className="font-bold">{item.name}</h2>
                    <div className="flex gap-2 items-center">
                        <div>Цена: {item.price} руб</div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addItem(item);
                                setCliked(true);
                                setTimeout(() => {
                                    setCliked(false);
                                }, 350);
                            }}
                            className={"bg-green-500 w-8 h-8 flex justify-center items-center rounded hover:bg-green-300 transition overflow-hidden transition " +
                                (clicked ? "scale-[130%]" : "scale[100%]")
                            }
                        >
                            {clicked ? <CheckIcon /> : <CartSvg className="w-5 h-5" />}
                        </button>
                    </div> 
                </div>
                <p>{item.description}</p>
            </Link >
        </div >
    )
}