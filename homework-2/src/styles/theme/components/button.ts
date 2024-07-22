import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: "full"
    },
    
    sizes: {
        medium: {
            width: "144px",
            height: "52px"
        },
        small: {
            width: "98px",
            height: "38px"
        },
        big: {
            width: "202px",
            height: "52px"
        }
    },

    variants: {
        lead: {
            color: "purple",
            backgroundColor: "white",
            fontSize: "button"
        },
        uploadImg: {
            boxSize: "big"
        }
    },

    defaultProps: {
        variant: "lead",
        size: "medium"
    },    
})