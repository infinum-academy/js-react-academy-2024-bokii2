import { render, screen } from "@testing-library/react"
import { ReviewForm } from "./ReviewForm"

describe('ReviewForm', () => {
    it('should render input component', () => {
        render(<ReviewForm addShowReview={() => {}} />)
        const inputComp = screen.getByRole('textbox');
        expect(inputComp).toBeInTheDocument();
    })

    it('should render rating component', () => {
        render(<ReviewForm addShowReview={() => {}} />)
        const ratingComp = screen.getByTestId('rating');
        expect(ratingComp).toBeInTheDocument();
    })

    it('should render button', () => {
        render(<ReviewForm addShowReview={() => {}} />)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})