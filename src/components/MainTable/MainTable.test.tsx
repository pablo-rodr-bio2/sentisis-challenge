import MainTable from "@/components/MainTable/MainTable";
import useUnits from "@/hooks/useUnits";
import { mockTickets, mockUnitStore } from "@/utils/mock-data";
import { render } from "@testing-library/react";
import { expect, vi } from "vitest";

vi.mock('@/hooks/useUnits');

const mockUseUnits = vi.mocked(useUnits);

describe("MainTable", () => {
  it("renders the tickets", () => {
    mockUseUnits.mockReturnValue({
      unitStore: [],
      updateUnit: vi.fn()
    });

    const { getAllByTestId } = render(<MainTable tickets={mockTickets} />);

    expect(getAllByTestId("main-table-content-row")).toHaveLength(mockTickets.length);
  })

  describe("when there are tickets with units in the local store", () => {
    it("renders the CartContainer", () => {
      mockUseUnits.mockReturnValue({
        unitStore: mockUnitStore,
        updateUnit: vi.fn()
      });

      const { getByTestId } = render(<MainTable tickets={mockTickets} />);

      expect(getByTestId("cart-container-button")).toBeTruthy();
    });
  })

  describe("when there are no tickets with units in the local store", () => {
    it("does not render the CartContainer", () => {
      mockUseUnits.mockReturnValue({
        unitStore: [],
        updateUnit: vi.fn()
      });

      const { queryByTestId } = render(<MainTable tickets={mockTickets} />);

      expect(queryByTestId("cart-container-button")).toBeFalsy();
    });
  });
})