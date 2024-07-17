import { create } from 'zustand'

export const useCart = create(function (set) {
    return {
        cart: [],
        addItem: (item) =>
            set(function (state) {
                return {
                    cart: [...state.cart, item],
                };

            }),
        removeItem: (item) => {
            set(function (state) {
                state.cart.splice(state.cart.findIndex((cartItem) => cartItem.name === item.name), 1);
                return {
                    cart: [...state.cart]
                }


            })


        }
    };
});

