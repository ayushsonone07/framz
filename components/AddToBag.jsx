"use client"

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";
import png from "../public/pngegg.png"

export default function AddToBag({currency, description, image, name, price, price_id}) {
    const { addItem, handleCartClick} = useShoppingCart();

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }

    return <Button 
                onClick={() => {
                addItem(product), handleCartClick();
                }}
            >
        Add To Bag</Button>
}