import customtheme from '../customtheme';
import { ThemeProvider, CSSReset} from "@chakra-ui/react";

const MyApp = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={customtheme}>
            <CSSReset/>
            <Component {...pageProps} />
            <style global jsx>{`
                .youtubecontainer {
                    margin: 2em 0 !important;
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
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
                }

                .blogcontent h2 {
                    font-size: 1.5em !important;
                    font-weight: bold !important;
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
                }

                .blogcontent h3 {
                    font-size: 1.17em !important;
                    font-weight: bold !important;
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
                }

                .blogcontent h4 {
                    font-size: 1em !important;
                    font-weight: bold !important;
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
                }

                .blogcontent h5 {
                    font-size: 0.83em !important;
                    font-weight: bold !important;
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
                }

                .blogcontent h6 {
                    font-size: 0.67em !important;
                    font-weight: bold !important;
                    margin: 2em 0 !important;
                    line-height: 1em !important;
                    text-align: center !important;
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
                    text-decoration: underline;
                } 

                .blog-image {
                    display: flex !important;
                    margin: 1em 0 !important;
                }

                .imageleft{
                    justify-content: flex-start !important;
                }

                .imageright{
                    justify-content: flex-end !important;
                }

                .imagecenter{
                    justify-content: center !important;
                }

                .textcenter{
                    text-align: center;
                }

                .textleft {
                    text-align: left;
                }

                .textright {
                    text-align: right;
                }
            `}</style>
        </ThemeProvider>
    )
}


export default MyApp