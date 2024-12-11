import { useQuery } from "@tanstack/react-query";

async function fetchTickets() {
  const result = await fetch('https://my-json-server.typicode.com/davidan90/demo/tickets');
  return result.json();
}

export default function useFetchTickets() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets,
  });

  return { 
    tickets: data, 
    isLoading, 
    error 
  };
}