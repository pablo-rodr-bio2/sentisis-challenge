import { Currency, ProcessedTicket, StoredTicket, TicketType } from "@/types/ticket";

export const mockTickets: ProcessedTicket[] = [
  {
    id: "1",
    description: "Ticket 1",
    currency: Currency.EUR,
    price: 10,
    releaseDate: "23/04/2019", 
    // 1555970400000,
    title: "Ticket 1",
    type: TicketType.SHOW,
  },
  {
    id: "2",
    description: "Ticket 2",
    currency: Currency.EUR,
    price: 20,
    releaseDate: "20/10/2021",
    // 1634680800000,
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

