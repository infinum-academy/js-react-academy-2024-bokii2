import { createMultiStyleConfigHelpers, defineStyleConfig } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)


export const Card = defineMultiStyleConfig({
    baseStyle: {
        container: {
            backgroundColor: "white",
            color: "purple",
            borderRadius: 15
        },
        body: {
            alignItems: "center"
        }
    },

    variants: {
        showCard: {
            container: {
                width: "240px",
                height: "375px",
                overflow: "hidden"
            }, 
            
        },
        showDetails: {
            container: {
                width: "1053px",
                height: "609px",
                overflow: "hidden"
            },
            body: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }
        }
    },

})