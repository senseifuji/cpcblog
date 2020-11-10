import customtheme from '../customtheme';
import { ThemeProvider, CSSReset} from "@chakra-ui/core";

const MyApp = ({Component, pageProps}) => {

    return (
        <ThemeProvider theme={customtheme}>
            <CSSReset/>
            <Component {...pageProps} />
           <style global jsx>{`
                .youtubecontainer {
                  width: 100% !important;
                  height: auto !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                }

                .blogcontent figure {
                    margin: 2em 0;
                    width: 100% !important;
                    height: auto !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                }
            `}</style>
        </ThemeProvider>
    )
}


export default MyApp