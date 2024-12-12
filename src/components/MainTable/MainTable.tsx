import CartContainer from "@/components/CartContainer/CartContainer";
import MainTableContent from "@/components/MainTableContent/MainTableContent";
import TicketDialog from "@/components/TicketDialog/TicketDialog";
import useUnits from "@/hooks/useUnits";
import getUnitByTicketId from "@/utils/get-unit-by-ticked-id";
import { useState } from "react";
import { Ticket } from "../../types/ticket";

type Props = {
  tickets: Ticket[]
}

function MainTable({ tickets }: Props) {
  const { unitStore, updateUnit } = useUnits()
  const [ selectedTicket, setSelectedTicket ] = useState<Ticket | null>(null);

  const handleRowClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="mb-4 text-4xl font-extrabold">
        Choose your Tickets
      </h1>

      <MainTableContent
        unitStore={unitStore}
        tickets={tickets}
        updateUnit={updateUnit}
        onRowClick={handleRowClick}
      />

      {unitStore.length > 0 && <CartContainer unitStore={unitStore}/>}

      {selectedTicket && (
        <TicketDialog
          ticket={selectedTicket}
          onChange={setSelectedTicket}
          unit={getUnitByTicketId(unitStore, selectedTicket.id)}
          updateUnit={updateUnit}
        />
      )} 
    </div>
  )
}

export default MainTable