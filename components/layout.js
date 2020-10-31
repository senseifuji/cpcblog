import Head from 'next/head'
import { Flex } from '@chakra-ui/core';

const Layout = ({children, title, direction="row"}) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="css/fontface.css"/>
                <script src="https://kit.fontawesome.com/03f0c5f1a0.js" crossorigin="anonymous"></script>
            </Head>
            <Flex direction={direction}>
                {children}
            </Flex>  
        </>
     );
}
 
export default Layout;