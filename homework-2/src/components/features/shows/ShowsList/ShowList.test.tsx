import { render, screen } from "@testing-library/react";
import { ShowsList } from "./ShowsList";

describe('ShowList', () => {
    const mockShowsList = [
        {
          id: "1",
          title: "Some show 1",
          image_url: "somephoto.jpg",
          average_rating: 3,
          description: "",
        },
        {
          id: "2",
          title: "Some show 2",
          image_url: "somephoto2.jpg",
          average_rating: 2,
          description: "Some test description",
        },
        
      ];
    
    it("should render all provided shows", () => {
        render(<ShowsList shows={mockShowsList} />);

        const shows = screen.getByTestId("showsList");
        expect(shows).toBeInTheDocument();
    })
})