import { defineStyleConfig } from "@chakra-ui/react";

export const Card = defineStyleConfig({
    baseStyle: {
    },
    
    sizes: {
        webSmall: {
            width: "240px",
            height: "375px"
        },
        webHuge: {
            width: "1053px",
            height: "609px"
        },
        mobileSmall: {
            width: "342px",
            height: "480px"
        },
        mobileHuge: {
            width: "343px",
            height: "534px"
        },
    },

    variants: {
        lead: {
            color: "purple",
            backgroundColor: "white",
        },
        uploadImg: {
            boxSize: "big"
        }
    },

    defaultProps: {
        
    },
})