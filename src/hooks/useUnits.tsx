import { ProcessedTicket, StoredTicket } from "@/types/ticket";
import { useEffect, useState } from "react";
import { getUnitStoreFromSessionStorage, setUnitStoreToSessionStorage } from "../utils/session-storage";

function updateUnitStore(prevUnitStore: StoredTicket[], ticket: ProcessedTicket, newUnit: number) {
  if (newUnit === 0) {
    return prevUnitStore.filter((item) => item.ticket.id !== ticket.id);
  }

  const existingIndex = prevUnitStore.findIndex((item) => item.ticket.id  === ticket.id);

  if (existingIndex === -1) {
    return [...prevUnitStore, { ticket, unit: newUnit }];
  }

  return prevUnitStore.map((item, index) => 
    index === existingIndex ? { ...item, unit: newUnit } : item
  );      
}

function useUnits() {
  const [unitStore, setUnitStore] = useState<StoredTicket[]>(
    getUnitStoreFromSessionStorage()
  );

  useEffect(() => {
    setUnitStoreToSessionStorage(unitStore);
  }, [unitStore]);

  const updateUnit = (ticket: ProcessedTicket, newUnit: number) => {
    setUnitStore(prevUnitStore => updateUnitStore(prevUnitStore, ticket, newUnit));
  }

  return {
    unitStore,
    updateUnit,
  }
}

export default useUnits