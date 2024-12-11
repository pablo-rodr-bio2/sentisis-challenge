import useFetchTickets from "../../hooks/useFetchTickets"
import MainTable from "../MainTable/MainTable"

function MainTableContainer() {
  const { tickets, isLoading, error } = useFetchTickets()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <MainTable tickets={tickets} />
  )
}

export default MainTableContainer