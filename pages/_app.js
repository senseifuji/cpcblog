import customTheme from '../lib/customtheme'
import { ThemeProvider, CSSReset} from "@chakra-ui/core";


const MyApp = ({Component, pageProps}) => {

    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}


export default MyApp