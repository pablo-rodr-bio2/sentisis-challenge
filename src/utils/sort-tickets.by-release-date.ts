import { Ticket } from "@/types/ticket";

export default function sortTicketsByReleaseDate(data: Ticket[] = []) {
  return data.sort((a: Ticket, b: Ticket) => b.releaseDate - a.releaseDate);
}
