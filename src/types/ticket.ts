export enum TicketType {
  SHOW = "show",
  TALK = "talk",
  MUSICAL = "musical",
}

export enum Currency {
  EUR = "euro", 
}

export type Ticket = {
  id: string,
  title: string,
  type: TicketType,
  releaseDate: string,
  price: number,
  description: string,
  currency: Currency,
}

export type StoredTicket = {
  ticket: Ticket;
  unit: number;
}