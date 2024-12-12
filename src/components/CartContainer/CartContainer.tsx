import CartContent from "@/components/CartContent/CartContent"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useUnitStoreContext } from "@/context/UnitStoreContext"

function CartContainer() {
  const { unitStore } = useUnitStoreContext()

  if(!unitStore.length) {
    return undefined
  }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Cart</Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:hidden">   
          <DialogTitle>Cart</DialogTitle>

          <DialogDescription>Here are your selected tickets</DialogDescription>

          <CartContent unitStore={unitStore}/>
      </DialogContent>    
    </Dialog>
  )
}

export default CartContainer