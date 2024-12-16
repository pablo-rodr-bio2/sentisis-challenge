export enum TicketType {
  SHOW = "show",
  TALK = "talk",
  MUSICAL = "musical",
}

export enum Currency {
  EUR = "euro", 
}

export type ApiTicket = {
  id: string,
  title: string,
  type: TicketType,
  releaseDate: number,
  price: number,
  description: string,
  currency: Currency,
}

export type ProcessedTicket = Omit<ApiTicket, "releaseDate"> & {
  releaseDate: string;
}

export type StoredTicket = {
  ticket: ProcessedTicket;
  unit: number;
}