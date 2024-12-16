import UnitCounter from "@/components/UnitCounter/UnitCounter"
import { ProcessedTicket, StoredTicket } from "@/types/ticket"
import getUnitByTicketId from "@/utils/get-unit-by-ticked-id"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo } from "react"

type Props = {
  tickets: ProcessedTicket[];
  unitStore: StoredTicket[];
  updateUnit: (ticket: ProcessedTicket, newUnit: number) => void;
  onRowClick: (ticket: ProcessedTicket) => void
}

function MainTableContent({ tickets, unitStore, updateUnit, onRowClick } : Props) {
  const columns = useMemo(
    () => [
      { header: "Name", accessorKey: "title" },
      { header: "Type", accessorKey: "type" },
      { header: "Release Date", accessorKey: "releaseDate", },
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
      { header: "Price", accessorKey: "price" },
    ],
    [unitStore]
  );

  const table = useReactTable({
    columns,
    data: tickets,
    getCoreRowModel: getCoreRowModel(),
  })
  
  return (
    <table className="table-auto w-full" data-testid="main-table-content-root">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id} 
              onClick={() => onRowClick(row.original)} 
              className="cursor-pointer hover:bg-gray-100"
              data-testid="main-table-content-row"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 border-b" data-testid="main-table-content-row-cell">
                  {flexRender(
                    cell.column.columnDef.cell, 
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>            
          ))}
        </tbody>
      </table>
  )
}

export default MainTableContent