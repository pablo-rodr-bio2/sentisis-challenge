import { StoredTicket } from "@/types/ticket";
import { useEffect, useState } from "react";
import { getUnitStoreFromSessionStorage, setUnitStoreToSessionStorage } from "../utils/session-storage";

function useUnits() {
  const [unitStore, setUnitStore] = useState<StoredTicket[]>(
    getUnitStoreFromSessionStorage()
  );

  useEffect(() => {
    setUnitStoreToSessionStorage(unitStore);
  }, [unitStore]);

  const updateUnit = (ticketId: string, newUnit: number) => {
    setUnitStore(prevUnitStore => {
      if (newUnit === 0) {
        return prevUnitStore.filter((item) => item.ticketId !== ticketId);
      }

      const existingIndex = prevUnitStore.findIndex((item) => item.ticketId === ticketId);

      if (existingIndex === -1) {
        return [...prevUnitStore, { ticketId, unit: newUnit }];
      }

      return prevUnitStore.map((item, index) => 
        index === existingIndex ? { ...item, unit: newUnit } : item
      );      
    })
  }

  return {
    unitStore,
    updateUnit,
  }
}

export default useUnits