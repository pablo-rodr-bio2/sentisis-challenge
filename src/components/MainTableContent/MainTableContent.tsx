import { Ticket } from "@/types/ticket"
import { flexRender, Table } from "@tanstack/react-table"

type Props = {
  table: Table<Ticket>
  onRowClick: (ticket: Ticket) => void
}

function MainTableContent({ table, onRowClick } : Props) {
  return (
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
              onClick={() => onRowClick(row.original)} 
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
  )
}

export default MainTableContent