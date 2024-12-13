import { DATA_URL } from "@/constants/constants";
import formatTicketsReleaseDate from "@/utils/format-tickets-release-date";
import sortTicketsByReleaseDate from "@/utils/sort-tickets.by-release-date";
import { useQuery } from "@tanstack/react-query";

async function fetchTickets() {
  const result = await fetch(DATA_URL);
  return result.json();
}

export default function useFetchTickets() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
  });

  const sortedData = sortTicketsByReleaseDate(data);
  const formattedData = formatTicketsReleaseDate(sortedData);

  return { 
    tickets: formattedData, 
    isLoading, 
    error 
  };
}