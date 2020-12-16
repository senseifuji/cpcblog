import Head from 'next/head'
import { Flex } from '@chakra-ui/core';

const Layout = ({children, direction="row"}) => {
    return ( 
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
               


                <link rel="stylesheet" href="/css/fontface.css"/>
                <script src="https://kit.fontawesome.com/03f0c5f1a0.js" crossorigin="anonymous"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LE69ZN8M4Q"></script>
                <script async dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-LE69ZN8M4Q');`
                    }}
                />

            </Head>
            <Flex direction={direction}>
                {children}
            </Flex>  
        </>
     );
}
 
export default Layout;