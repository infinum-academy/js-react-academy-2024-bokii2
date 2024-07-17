import { fireEvent, render, screen } from "@testing-library/react";
import { ReviewItem } from "./ReviewItem";

describe('ReviewItem', () => {
    const mockReview = {
        email: 'test@test.com',
        rating: 3,
        comment: 'Test comment'
    };

    const mockOnDelete = jest.fn();

    it('should renders correct user email', () =>{
        render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />)
        const emailElement = screen.getByText(mockReview.email);
        expect(emailElement).toBeInTheDocument();
    })

    it('should render correct rating', () =>{
        render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />)
        const rating = screen.getByText(mockReview.rating + ' / 5');
        expect(rating).toBeInTheDocument();
    })

    it('should render review comment', () =>{
        render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />)
        const comment = screen.getByText(mockReview.comment);
        expect(comment).toBeInTheDocument();
    })

    it('should render delete button', () =>{
        render(<ReviewItem review={mockReview} onDeleteReview={() => {}} />)
        const deleteButton = screen.getByTestId('delete-button');
        expect(deleteButton).toBeInTheDocument();
    })

    it('should call delete button only once', () =>{
        render(<ReviewItem review={mockReview} onDeleteReview={mockOnDelete} />)

        const deleteButton = screen.getByTestId('delete-button');
        fireEvent.click(deleteButton);

        expect(mockOnDelete).toHaveBeenCalledTimes(1);
    })
})