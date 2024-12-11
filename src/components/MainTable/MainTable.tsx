
function MainTable({ tickets }) {
  return (
    <div>{tickets.map(ticket => {
      return (
        <div key={ticket.id} style={{ display: "flex", gap: "1rem"}}>
          <div>Name: {ticket.title}</div>
          <div>Type: {ticket.type}</div>
          <div> Release Date: {ticket.releaseDate}</div>
          <div> Unit </div>
          <div> Price: {ticket.price}</div>
        </div>
      )
    })}</div>
  )
}

export default MainTable