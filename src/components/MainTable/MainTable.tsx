import CartContainer from "@/components/CartContainer/CartContainer";
import MainTableContent from "@/components/MainTableContent/MainTableContent";
import TicketDialog from "@/components/TicketDialog/TicketDialog";
import { useUnitStoreContext } from "@/context/UnitStoreContext";
import getUnitByTicketId from "@/utils/get-unit-by-ticked-id";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { Ticket } from "../../types/ticket";
import UnitCounter from "../UnitCounter/UnitCounter";

type Props = {
  tickets: Ticket[]
}

function MainTable({ tickets }: Props) {
  const { unitStore, updateUnit } = useUnitStoreContext()
  const [ selectedTicket, setSelectedTicket ] = useState<Ticket | null>(null);

  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "title", 
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Release Date",
        accessorKey: "releaseDate",
      },
      {
        header: "Unit",
        cell: (info: any) => {
          const ticket = info.row.original;
          const unit = getUnitByTicketId(unitStore, ticket.id);

          return (
            <UnitCounter 
              ticket={ticket}
              unit={unit}
              onUpdate={updateUnit}
            />
          )          
        }
      },
      {
        header: "Price",
        accessorKey: "price",
      },
    ],
    [unitStore]
  );

  const table = useReactTable({
    columns,
    data: tickets,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleRowClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="flex flex-col gap-6 items-center  min-h-screen">
      <h1 className="mb-4 text-4xl font-extrabold">
        Choose your Tickets
      </h1>

      <MainTableContent
        table={table}
        onRowClick={handleRowClick}
      />

      <CartContainer />

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