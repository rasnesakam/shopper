"use client"

import {createContext, ReactNode, useContext, useState} from "react";
import Cart from "../../types/Cart";
import Product from "../../types/Product";
import cart from "../../types/Cart";

interface CartContextProps {
    cart: Cart;
    appendCart: ({product, amount}: {product: Product, amount: number}) => void;
    deleteItem: (index: number) => void;
    decreaseAmount: (index: number) => void;
}

function saveCart(cart: Cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}


function loadCart(): Cart{
    if (typeof localStorage == 'undefined')
        return {products: []} as Cart;
    let cart = localStorage.getItem("cart");
    return cart != null ? JSON.parse(cart) as Cart : {products: []} as Cart;
}

function appendCart({product, amount}: {product: Product, amount: number}) {
    let cart = loadCart();
    cart.products.push({product: product, amount: amount});
    saveCart(cart);
}

function decreaseAmount(index: number) {
    let cart = loadCart();
    if (cart.products[index].amount > 0)
        cart.products[index].amount--;
    else
        cart.products.splice(index, 1);
    saveCart(cart);
}

function deleteItem(index: number) {
    let cart = loadCart();
    cart.products.splice(index, 1);
    saveCart(cart);
}

const CartContext = createContext<CartContextProps>({
    cart: loadCart(),
    appendCart: appendCart,
    decreaseAmount: decreaseAmount,
    deleteItem: deleteItem,
});

const CartContextAdapter = ({children}: any) => {
    const [cart, setCart] = useState(loadCart());
    return <CartContext.Provider value={
        {
            cart: loadCart(),
            appendCart: ({product, amount}) => {
                appendCart({product, amount});
                setCart(loadCart());
            },
            deleteItem : (index) => {
                deleteItem(index);
                setCart(loadCart());
            },
            decreaseAmount: (index) => {
                decreaseAmount(index);
                setCart(loadCart());
            }
        }
    }>
        {children}
    </CartContext.Provider>;
}

function useCartContext(){
    return useContext(CartContext);
}

export {useCartContext, CartContextAdapter};