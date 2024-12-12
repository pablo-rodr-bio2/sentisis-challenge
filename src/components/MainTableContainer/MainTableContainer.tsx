import useFetchTickets from "../../hooks/useFetchTickets"
import MainTable from "../MainTable/MainTable"

function MainTableContainer() {
  const { tickets, isLoading, error } = useFetchTickets()

  if (isLoading) {
    return <div data-testid="main-table-container-loading">Loading...</div>
  }

  if(error) {
    return <div data-testid="main-table-container-error">Error: {error.message}</div>
  }

  return (
    <MainTable tickets={tickets} />
  )
}

export default MainTableContainer