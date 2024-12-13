import { Currency, StoredTicket, Ticket, TicketType } from "@/types/ticket";

export const mockTickets: Ticket[] = [
  {
    id: "1",
    description: "Ticket 1",
    currency: Currency.EUR,
    price: 10,
    releaseDate: 1555970400000,
    title: "Ticket 1",
    type: TicketType.SHOW,
  },
  {
    id: "2",
    description: "Ticket 2",
    currency: Currency.EUR,
    price: 20,
    releaseDate: 1634680800000,
    title: "Ticket 2",
    type: TicketType.SHOW,
  }
];

export const mockUnitStore: StoredTicket[] = [
  {
    ticket: mockTickets[0],
    unit: 5,
  },
];

