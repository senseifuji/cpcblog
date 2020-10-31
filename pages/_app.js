import customtheme from '../customtheme';
import { ThemeProvider, CSSReset} from "@chakra-ui/core";

const MyApp = ({Component, pageProps}) => {

    return (
        <ThemeProvider theme={customtheme}>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}


export default MyApp