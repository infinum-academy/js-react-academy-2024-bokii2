import { defineStyleConfig } from "@chakra-ui/react";
import { weight } from "../foundations/font";
import { radius } from "../foundations/radius";

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: radius.full,
        fontWeight: weight.regular
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
        link: {
            fontSize: "button",
            backgroundColor: "transparent",
            color: "white",
            _active: {
                backgroundColor: "purple",
                color: "white"
            },
            _hover: {
                textDecoration: "none"
            },
            padding: '5px',
            textDecoration: 'none',
            width: "140px"
        }
    },

    defaultProps: {
        variant: 'lead'
    }
})