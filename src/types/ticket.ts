enum TicketType {
  SHOW = "show",
  TALK = "talk",
  MUSICAL = "musical",
}

export type Ticket = {
  id: string,
  title: string,
  type: TicketType,
  releaseDate: number,
  price: number,
  description: string,
}