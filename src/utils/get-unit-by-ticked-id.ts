import { StoredTicket } from "@/types/ticket";

export default function getUnitByTicketId(unitStore: StoredTicket[], ticketId: string) {
  return unitStore.find((item) => item.ticketId === ticketId)?.unit || 0;
}