import { ShowCard } from "./ShowCard";
import { render, screen } from '@testing-library/react';

describe('ShowCard', () => {
    const mockShow = {
        id: '1',
        title: "Game Of Thrones",
        description: `Game of Thrones is roughly based on the storylines of the A Song of Ice and Fire book series by George R. R. Martin,
                      set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series follows several simultaneous
                      plot lines. The first story arc follows a war of succession among competing claimants for control of the Iron Throne 
                      of the Seven Kingdoms, with other noble families fighting for independence from the throne. The second concerns the 
                      exiled scion &apos; actions to reclaim the throne; the third chronicles the threat of the impending winter, as well as the 
                      legendary creatures and fierce peoples of the North.`,
        average_rating: 2,
        image_url: "game-of-thrones.jpg"
    }

    const mockShow2 = {
        id: '1',
        title: "Game Of Thrones",
        description: `Game of Thrones is roughly based on the storylines of the A Song of Ice and Fire book series by George R. R. Martin,
                      set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series follows several simultaneous
                      plot lines. The first story arc follows a war of succession among competing claimants for control of the Iron Throne 
                      of the Seven Kingdoms, with other noble families fighting for independence from the throne. The second concerns the 
                      exiled scion &apos; actions to reclaim the throne; the third chronicles the threat of the impending winter, as well as the 
                      legendary creatures and fierce peoples of the North.`,
        average_rating: 0,
        image_url: "game-of-thrones.jpg"
    }

    it('should contains image with provided url', () => {
        render(<ShowCard show={mockShow} />)
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', mockShow.image_url);
    })

    it('should render the title', () => {
        render(<ShowCard show={mockShow} />)
        const title = screen.getByText(mockShow.title);
        expect(title).toBeInTheDocument();
    })

    it('should render the correct average rating', () => {
        render(<ShowCard show={mockShow} />)
        const avg_rating = screen.getByText(mockShow.average_rating + '/5');
        expect(avg_rating).toBeInTheDocument();
    })

    it('should render the correct average rating if it\'s 0', () => {
        render(<ShowCard show={mockShow2} />)
        const avg_rating = screen.getByText('No rating yet');
        expect(avg_rating).toBeInTheDocument();
    })
});