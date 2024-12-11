import { useQuery } from "@tanstack/react-query";
import { Ticket } from "../types/ticket";

async function fetchTickets() {
  const result = await fetch('https://my-json-server.typicode.com/davidan90/demo/tickets');
  return result.json();
}

export default function useFetchTickets() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
  });

  //REFACTOR
  const formattedData = data
  ?.sort((a: Ticket, b: Ticket) => b.releaseDate - a.releaseDate)
  .map((ticket: Ticket) => ({
    ...ticket,
    releaseDate: new Date(ticket.releaseDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  }));

  return { 
    tickets: formattedData, 
    isLoading, 
    error 
  };
}