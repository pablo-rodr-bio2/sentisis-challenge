import MainTableContainer from "@/components/MainTableContainer/MainTableContainer";
import useFetchTickets from "@/hooks/useFetchTickets";
import { ProcessedTicket } from "@/types/ticket";
import { mockTickets } from "@/utils/mock-data";
import { render } from "@testing-library/react";
import { vi } from "vitest";

vi.mock('@/hooks/useFetchTickets');

vi.mock("../MainTable/MainTable", () => ({
  default: ({ tickets }: { tickets: ProcessedTicket[] }) => (
    <div data-testid="main-table">{tickets.length} tickets</div>
  ),
}));

const mockUseFetchTickets = vi.mocked(useFetchTickets);

describe('MainTableContainer', () => {
  describe('when isLoading is true', () => {
    it('should render loading message', () => {
      mockUseFetchTickets.mockReturnValue({
        tickets: [],
        isLoading: true,
        error: null
      });

      const { getByTestId } = render(<MainTableContainer />);

      expect(getByTestId('main-table-container-loading')).toBeInTheDocument();
    })
  })

  describe('when error is present', () => {
    it('should render error message', () => {
      mockUseFetchTickets.mockReturnValue({
        tickets: [],
        isLoading: false,
        error: { message: 'An error occurred' } as Error
      });

      const { getByTestId } = render(<MainTableContainer />);

      expect(getByTestId('main-table-container-error')).toBeInTheDocument();
    })
  })

  describe('when tickets are present', () => {
    it('should render MainTable with tickets', () => {
      mockUseFetchTickets.mockReturnValue({
        tickets: mockTickets,
        isLoading: false,
        error: null
      });

      const { getByTestId } = render(<MainTableContainer />);

      expect(getByTestId('main-table')).toHaveTextContent('2 tickets');
    })
  })
})