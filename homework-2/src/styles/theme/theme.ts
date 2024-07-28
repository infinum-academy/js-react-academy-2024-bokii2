import { extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto"
import { colors } from "./foundations/colors";
import { fonts, sizes, weight } from "./foundations/font";
import { Button } from "./components/button";
import { radius } from "./foundations/radius";
import { Card } from "./components/card";
import { breakpoints } from "./foundations/breakpoints";

const theme = extendTheme({
    components: {Button, Card},
    colors,
    fonts,
    sizes,
    weight,
    radius,
    breakpoints
})

export default theme;