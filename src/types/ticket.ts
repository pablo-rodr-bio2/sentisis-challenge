enum TicketType {
  SHOW = "show",
  TALK = "talk",
  MUSICAL = "musical",
}

enum Currency {
  EUR = "euro", 
}

export type Ticket = {
  id: string,
  title: string,
  type: TicketType,
  releaseDate: number,
  price: number,
  description: string,
  currency: Currency,
}

export type StoredTicket = {
  ticket: Ticket;
  unit: number;
}