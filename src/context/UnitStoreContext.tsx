import useUnits from "@/hooks/useUnits";
import { StoredTicket } from "@/types/ticket";
import { createContext, ReactNode, useContext } from "react";

type UnitStoreContextType = {
  unitStore: StoredTicket[];
  updateUnit: (ticketId: string, newUnit: number) => void;
};

const UnitStoreContext = createContext<UnitStoreContextType | undefined>(undefined);

export const UnitStoreProvider = ({ children }: { children: ReactNode}) => {
  const { unitStore, updateUnit } = useUnits();

  return (
    <UnitStoreContext.Provider value={{ unitStore, updateUnit }}>
      {children}
    </UnitStoreContext.Provider>
  );
};

export const useUnitStoreContext = () => {
  const context = useContext(UnitStoreContext);
  if (context === undefined) {
    throw new Error("useUnitStoreContext must be used within a UnitStoreProvider");
  }
  return context;
};