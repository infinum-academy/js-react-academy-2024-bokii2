import { extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto"
import { colors } from "./foundations/colors";
import { sizes, typography, weight } from "./foundations/font";
import { Button } from "./components/button";
import { radius } from "./foundations/radius";

const theme = extendTheme({
    components: {Button},
    colors,
    typography,
    sizes,
    weight,
    radius
})

export default theme;