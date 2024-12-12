import getUnitByTicketId from "@/utils/get-unit-by-ticked-id";
import { mockUnitStore } from "@/utils/mock-data";

describe("getUnitByTicketId", () => {
  describe('when the ticket is found', () => {
    it("returns the unit", () => {
      expect(getUnitByTicketId(mockUnitStore, "1")).toBe(5);
    });
  });

  describe('when the ticket is not found', () => {
    it("returns 0", () => {
      expect(getUnitByTicketId(mockUnitStore, "2")).toBe(0);
    });
  });
});
