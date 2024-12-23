import { ApiTicket } from "@/types/ticket";
import formatTicketsReleaseDate from "@/utils/format-tickets-release-date";
import { mockTickets } from "@/utils/mock-data";

describe('formatTicketsReleaseDate', () => {
  describe('when data is empty', () => {
    it('returns an empty array', () => {
      const result = formatTicketsReleaseDate([]);

      expect(result).toEqual([]);
    });
  });

  describe("when the date is invalid", () => {
    it("formats the correct error message in the date", () => {
      const mockData: ApiTicket[] = [
        {
          ...mockTickets[0],
          releaseDate: NaN,
        },
      ];

      const result = formatTicketsReleaseDate(mockData);

      expect(result).toEqual([{...mockData[0], releaseDate: "Invalid Date"}]);
    });
  })

  describe('when data is valid', () => {
    it('returns the formatted date', () => {
      const mockData: ApiTicket[] = [
        {
          ...mockTickets[0],
          releaseDate: 1555970400000,
        },
        {
          ...mockTickets[1],
          releaseDate: 1634680800000,
        }
      ];

      const result = formatTicketsReleaseDate(mockData);

      expect(result).toEqual([
        {
          ...mockTickets[0],
          releaseDate: "23/04/2019",
        },
        {
          ...mockTickets[1],
          releaseDate: "20/10/2021",
        },
      ]);
    });
  });
});