import { useEffect, useState } from "react"
import { getUnitsFromSessionStorage, setUnitsToSessionStorage } from "../utils/session-storage"

function useUnits() {
  const [ units, setUnits ] = useState<Record<string, number>>(
    getUnitsFromSessionStorage()
  )

  useEffect(() => {
    setUnitsToSessionStorage(units)
  }, [units])

  const updateUnit = (ticketId: string, newUnit: number) => {
    setUnits(prevUnits => ({
      ...prevUnits,
      [ticketId]: newUnit,
    }))
  }

  return {
    units,
    updateUnit,
  }
}

export default useUnits