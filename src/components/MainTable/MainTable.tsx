import MainTableContent from "@/components/MainTableContent/MainTableContent";
import TicketDialog from "@/components/TicketDialog/TicketDialog";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import useUnits from "../../hooks/useUnits";
import { Ticket } from "../../types/ticket";
import UnitCounter from "../UnitCounter/UnitCounter";

type Props = {
  tickets: Ticket[]
}

function MainTable({ tickets }: Props) {
  const { units, updateUnit } = useUnits()
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
          return (
            <UnitCounter 
              ticketId={ticket.id}
              unit={units[ticket.id] || 0}
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
    [units]
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
    <div>
      <MainTableContent
        table={table}
        onRowClick={handleRowClick}
      />

      {selectedTicket && (
        <TicketDialog 
          ticket={selectedTicket}
          onChange={setSelectedTicket}
          unit={units[selectedTicket.id] || 0}
          updateUnit={updateUnit}
        />
      )} 
    </div>
  )
}

export default MainTable