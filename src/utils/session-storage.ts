export function getUnitsFromSessionStorage() {
  try {
    const units = sessionStorage.getItem("units")
    return units ? JSON.parse(units) : {}
  } catch (error) {
    console.error(error)
    return {}
  }
}

export function setUnitsToSessionStorage(units: Record<string, number>) {
  try {
    sessionStorage.setItem("units", JSON.stringify(units))
  } catch (error) {
    console.error(error)
  }
}