import { StoredTicket } from "@/types/ticket";

export default function getUnitByTicketId(unitStore: StoredTicket[], ticketId: string) {
  return unitStore.find((item) => item.ticket.id === ticketId)?.unit || 0;
}