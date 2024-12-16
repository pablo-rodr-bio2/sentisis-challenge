import { ApiTicket } from "@/types/ticket";

export default function sortTicketsByReleaseDate(data: ApiTicket[] = []) {
  return data.sort((a: ApiTicket, b: ApiTicket) => b.releaseDate - a.releaseDate);
}
