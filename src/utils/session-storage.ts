import { StoredTicket } from "@/types/ticket";

export function getUnitStoreFromSessionStorage() {
  try {
    const unitStore = sessionStorage.getItem("unitStore")
    return unitStore ? JSON.parse(unitStore) : []
  } catch (error) {
    console.error(error)
    return []
  }
}

export function setUnitStoreToSessionStorage(unitStore: StoredTicket[]) {
  try {
    sessionStorage.setItem("unitStore", JSON.stringify(unitStore));
    console.log("setted")
  } catch (error) {
    console.error(error);
  }
}