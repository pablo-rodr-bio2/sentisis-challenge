import CartContent from "@/components/CartContent/CartContent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StoredTicket } from "@/types/ticket";

type Props = {
  unitStore: StoredTicket[];
}

function CartContainer({ unitStore } : Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-3xl h-14 p-10">Cart</Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:hidden">   
          <DialogTitle>Cart</DialogTitle>

          <DialogDescription>Check your selected tickets, subtotals and total price</DialogDescription>

          <CartContent unitStore={unitStore}/>
      </DialogContent>    
    </Dialog>
  )
}

export default CartContainer