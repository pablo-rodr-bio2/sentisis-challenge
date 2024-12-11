import { MouseEvent } from "react";

type Props = {
  ticketId: string;
  unit: number;
  onUpdate: (ticketId: string, newUnit: number) => void;
};

function UnitCounter({ ticketId, unit, onUpdate }: Props) {
  const handlePlus = (e: MouseEvent) => {
    e.stopPropagation();

    onUpdate(ticketId, unit + 1)
  }

  const handleMinus = (e: MouseEvent) => {
    e.stopPropagation();
    
    if (unit > 0) onUpdate(ticketId, unit - 1);
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem"}}>
      <button onClick={handlePlus}>+</button>

      <input type="number" size={10} readOnly value={unit} />

      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default UnitCounter