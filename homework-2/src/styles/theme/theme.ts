import { extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto"
import { colors } from "./foundations/colors";
import { sizes, typography, weight } from "./foundations/font";

const theme = extendTheme({
    components: {},
    colors,
    typography,
    sizes,
    weight
})

export default theme;