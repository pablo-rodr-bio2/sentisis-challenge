import { ApiTicket } from "@/types/ticket";

export default function formatTicketsReleaseDate(data: ApiTicket[] = []) {
  return data.map((ticket: ApiTicket) => ({
    ...ticket,
    releaseDate: new Date(ticket.releaseDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  }));
}