import { Ticket } from "@/types/ticket"
import { flexRender, Table } from "@tanstack/react-table"

type Props = {
  table: Table<Ticket>
  onRowClick: (ticket: Ticket) => void
}

function MainTableContent({ table, onRowClick } : Props) {
  return (
    <table className="table-auto w-full">
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
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 border-b">
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