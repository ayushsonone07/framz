"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
    {name: "Home", href: "/"},
    {name: "Frames", href: "/frames"},
    {name: "Photos", href: "/photos"},
    {name: "Videos", href: "/videos"},
    {name: "About us", href: "/about"},
]

export default function Navbar(){

    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();

    const toggleCart = () => {
        try {
          handleCartClick();
        } catch (error) {
          console.error('Error toggling cart:', error);
        }
    };

    // console.log(handleCartClick);
    
    return(
        <header className="mb-8 bottom-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="font-bold text-3xl">FRAMZ</h1>
                </Link>
                
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, id)=>(
                        <div key={id}>
                            {pathname === link.href ? (
                                <Link className="text-lg text-blue-500 font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className="text-lg font-semibold text-gray-600 duration-100 hover:text-primary">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <nav className="flex divide-x border-r sm:border-l">
                    <Button 
                        // variant={'outline'} 
                        onClick={() => toggleCart()}
                        className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                    >
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block ">Cart</span>
                    </Button>
                </nav>
            </div>
        </header>
    )
}