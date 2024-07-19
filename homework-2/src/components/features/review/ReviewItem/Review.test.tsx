import { fireEvent, render, screen } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";
import { DeleteButton } from "./DeleteButton/DeleteButton";

const mockReview = {
    show_id: 1,
    rating: 3,
    comment: 'Test comment'
};

jest.mock("./DeleteButton/DeleteButton", () => {
    return {
        DeleteButton: jest.fn().mockReturnValue(<div data-testid="delete-button"></div>)
    }
})

describe('ReviewItem', () => {
    it('should render the delete button', () => {
        render(<ReviewItem review={mockReview} />);
        
        expect(DeleteButton).toHaveBeenCalledWith({review: mockReview}, {});
    })

    it('should render review comment', () => {
        render(<ReviewItem review={mockReview} />);

        const comment = screen.getByTestId('comment');
        expect(comment.textContent).toBe(mockReview.comment);
    })
})