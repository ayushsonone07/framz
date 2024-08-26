"use client"

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

export default function AddToBag(currency, description, image, name, price) {
    const { addItem, handleCartClick} = useShoppingCart();
    return <Button>Add To Bag</Button>
}