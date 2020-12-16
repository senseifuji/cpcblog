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

                .blogcontent h1 {
                    font-size: 2em !important;
                    font-weight: bold !important;
                }

                .blogcontent h2 {
                    font-size: 1.5em !important;
                    font-weight: bold !important;
                }

                .blogcontent h3 {
                    font-size: 1.17em !important;
                    font-weight: bold !important;
                }

                .blogcontent h4 {
                    font-size: 1em !important;
                    font-weight: bold !important;
                }

                .blogcontent h5 {
                    font-size: 0.83em !important;
                    font-weight: bold !important;
                }

                .blogcontent h6 {
                    font-size: 0.67em !important;
                    font-weight: bold !important;
                }

                .blogcontent blockquote {
                    background: #f9f9f9;
                    border-left: 10px solid #ccc;
                    margin: 1.5em 0px;
                    padding: 0.5em 10px;
                    font-style: italic;
                    font-size: 0.9em;
                }

                {/* aqui se cambia el color de los enlaces de sesiones/publicaciones */}
                .blogcontent a {
                    color: #ef748a; 
                }          
            `}</style>
        </ThemeProvider>
    )
}


export default MyApp