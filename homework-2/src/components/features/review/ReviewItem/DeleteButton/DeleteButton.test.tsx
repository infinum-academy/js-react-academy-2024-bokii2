import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DeleteButton } from "./DeleteButton";
import { mutate } from "swr";
import { swrKeys } from "@/fetchers/swrKeys";

jest.mock('@/fetchers/review', () => ({
	deleteReview: jest.fn().mockResolvedValue(null)
}));

jest.mock('swr', () => ({
	mutate: jest.fn(),
}));

const mockReview = {
    id: '1',
    show_id: 1,
    rating: 3,
    comment: 'Test comment'
};

describe('DeleteButton', () => {
	it('should call review and mutate on success', async () => {
		render(<DeleteButton review={mockReview} />);

		const deleteButton = screen.getByTestId('delete-button');

		act(() => {
			fireEvent.click(deleteButton)
		});

		await waitFor(() => {
            expect(mutate).toHaveBeenCalledWith(swrKeys.getReviews(mockReview.show_id.toString()));
		});
	});
});