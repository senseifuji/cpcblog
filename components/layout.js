import Head from 'next/head'
import { Flex } from '@chakra-ui/core';

const Layout = ({children, title}) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="css/fontface.css"/>
            </Head>

            <Flex>
                {children}
            </Flex>  
        </>
     );
}
 
export default Layout;