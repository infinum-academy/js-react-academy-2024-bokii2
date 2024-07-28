import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { UpdateReview } from "../UpdateReview/UpdateReview"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { IReview } from "@/typings/Review.type";
import { sizes } from "@/styles/theme/foundations/font";
import { colors } from "@/styles/theme/foundations/colors";
import { radius } from "@/styles/theme/foundations/radius";

interface IReviewResp {
    review: IReview;
    refetchShowDetails: () => void;
}

export const ReviewButton = ({review, refetchShowDetails}: IReviewResp) => {
    return (
        <Menu>
            <MenuButton>⋮</MenuButton>
            <MenuList minW={0} width="130px" fontSize={sizes.button} paddingLeft='10px' borderRadius='15px'>
                <MenuItem>
                    <UpdateReview review={review} refetchShowDetails={refetchShowDetails} />
                </MenuItem>
                <MenuItem>
                    <DeleteButton review={review} refetchShowDetails={refetchShowDetails} />
                </MenuItem>
            </MenuList>
        </Menu>
    )
}