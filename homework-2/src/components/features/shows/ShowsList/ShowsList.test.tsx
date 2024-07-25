import { IShowList } from "@/typings/Show.type";
import { ShowCard } from "../ShowCard/ShowCard";
import { render } from "@testing-library/react";
import { ShowsList } from "./ShowsList";

jest.mock('../ShowCard/ShowCard', () => {
	return {
		ShowCard: jest.fn().mockReturnValue(null)
	}
});

const mockShowsList: IShowList = {
    shows: [
        {
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
        }, 
        {
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
    ]
}

describe('ShowList', () => {
    it('should check if mocked ShowCard has been called with appropriate props', () => {
		render(<ShowsList shows={mockShowsList.shows}/>)
		mockShowsList.shows.forEach((show, index) => expect(ShowCard).toHaveBeenNthCalledWith(index+1, {show: show}, expect.anything()))
	});
})