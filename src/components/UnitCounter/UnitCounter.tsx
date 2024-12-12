import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ticket } from "@/types/ticket";
import { MouseEvent } from "react";

type Props = {
  ticket: Ticket;
  unit: number;
  onUpdate: (ticket: Ticket, newUnit: number) => void;
};

function UnitCounter({ ticket, unit, onUpdate }: Props) {
  const handlePlus = (e: MouseEvent) => {
    e.stopPropagation();

    onUpdate(ticket, unit + 1)
  }

  const handleMinus = (e: MouseEvent) => {
    e.stopPropagation();

    if (unit > 0) onUpdate(ticket, unit - 1);
  }

  return (
    <div className="flex gap-2">
      <Button onClick={handlePlus}>+</Button>

      <Input 
        type="number" 
        onClick={(e) => e.stopPropagation()} 
        size={10} 
        readOnly 
        value={unit} 
      />

      <Button onClick={handleMinus}>-</Button>
    </div>
  )
}

export default UnitCounter