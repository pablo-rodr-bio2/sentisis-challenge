import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { ProcessedTicket } from "@/types/ticket";

type Props = {
  ticket: ProcessedTicket
  onChange: (ticket: ProcessedTicket | null) => void,
  unit: number,
  updateUnit: (ticketId: ProcessedTicket, unit: number) => void,
}
function TicketDialog({ ticket, onChange, unit, updateUnit }: Props) {
  const handleOpenChange = () => onChange(null);

  const handleIncrement = () => {
    updateUnit(ticket, unit + 1);

    onChange(null);
  };
  
  return (
    <Dialog 
      open={Boolean(ticket)}
      onOpenChange={handleOpenChange}
    >
      <DialogContent data-testid="ticket-dialog-root">
        <DialogTitle>{ticket.title}</DialogTitle>
        <DialogDescription>{ticket.description}</DialogDescription>
        <DialogDescription><strong>Type:</strong> {ticket.type}</DialogDescription>

        <DialogFooter>
          <Button onClick={handleIncrement}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TicketDialog