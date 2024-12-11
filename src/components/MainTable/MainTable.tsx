import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import useUnits from "../../hooks/useUnits";
import { Ticket } from "../../types/ticket";
import UnitCounter from "../UnitCounter/UnitCounter";

type Props = {
  tickets: Ticket[]
}

function MainTable({ tickets }: Props) {
  const { units, updateUnit } = useUnits()

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
        enableSorting: true,
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
    alert(JSON.stringify(ticket, null, 2));
  };

  return (
    <div>
      <table>
        <thead>
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
              onClick={() => handleRowClick(row.original)} 
              style={{ cursor: "pointer"}}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
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
    </div>
  )
}

export default MainTable