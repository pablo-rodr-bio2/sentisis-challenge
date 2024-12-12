import { StoredTicket } from '@/types/ticket';

type Props = {
  unitStore: StoredTicket[];
}

function CartContent({ unitStore } : Props) {
  const sortedUnitStore = unitStore.sort((a, b) => b.unit - a.unit);

  return (
    <div>
      {sortedUnitStore.map((item) => (
        <div className="flex gap-3 w-full" key={item.ticket.id}>
          <p className='flex-1'>Name: {item.ticket.title}</p>
          <p className='flex-1'>Units: {item.unit}</p>
          <p className='flex-1'>Subtotal: €{item.ticket.price * item.unit}</p>
        </div>
      ))}

      <div>
        Total: €
          {sortedUnitStore.reduce((total, item) => {
            return total + item.ticket.price * item.unit;
          }, 0)}
      </div>
    </div>
  )
}

export default CartContent