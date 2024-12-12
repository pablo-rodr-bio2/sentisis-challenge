import { Currency, StoredTicket, TicketType } from "@/types/ticket";

export const mockUnitStore: StoredTicket[] = [
  {
    ticket: { id: "1", description: "Ticket 1", currency: Currency.EUR, price: 10, releaseDate: 0, title: "Ticket 1", type: TicketType.SHOW },
    unit: 5,
  },
];