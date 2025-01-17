"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image";

export default function DrawerCart() {
    const {cartCount,
        shouldDisplayCart,
        handleCartClick,
        cartDetails,
        removeItem,
        totalPrice,
        redirectToCheckout,
        handleCloseCart,
    } = useShoppingCart();
    return(
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Shopping Cart</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                {/* Cart items */}
                <div className="h-full flex flex-col justify-between mx-12">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartCount === 0 ?
                            ( <h1 className="py-6">You dont have any items</h1>):
                            (
                                <>
                                  {Object.values(cartDetails ?? {}).map((entry) => (
                                    <li key={entry.id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                          src={entry.image}
                                          alt="Product image"
                                          width={100}
                                          height={100}
                                        />
                                      </div>
                
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{entry.name}</h3>
                                            <p className="ml-4">₹{entry.price}</p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                            {entry.description}
                                          </p>
                                        </div>
                
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                
                                          <div className="flex">
                                            <button
                                              type="button"
                                              onClick={() => removeItem(entry.id)}
                                              className="font-medium text-primary hover:text-primary/80"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </>
                              )}
                        </ul>
                    </div>
                </div>
                <DrawerFooter>
                <Button>Checkout</Button>
                <DrawerClose>
                    <Button 
                        variant="outline" 
                        onClick={() => handleCartClick()}>
                            Cancel
                    </Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}