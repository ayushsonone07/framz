import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"

export default function ShoppingCart() {
    return(
        <Sheet defaultOpen>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                </SheetHeader>
                <div>
                    <h1>Hello</h1>
                </div>
            </SheetContent>
        </Sheet>
    )
}