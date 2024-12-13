import { Ticket } from "@/types/ticket";

export default function formatTicketsReleaseDate(data: Ticket[] = []) {
  return data.map((ticket: Ticket) => ({
    ...ticket,
    releaseDate: new Date(ticket.releaseDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  }));
}