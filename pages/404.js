import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import  {Flex, Image, Text, Box} from '@chakra-ui/core';



// pages/404.js
export default function Custom404() {
    
    return (
       <>

            <Layout>
                <Header position="fixed" />
                <Content>
                    <Flex height="100vh" bg="cpc.blueDark" color="cpc.white" justify="center" alignItems="center"> 
                       <Flex direction="column" alignItems="center"> 
                            <Image src="/images/cpc.svg" alt="Manitas" width={["12em", "15em", "20em", "20em"]} />
                            <Text fontFamily="cpc.gothamBold" fontSize={["1em", "2em", "2em", "2em"]} mt="0.5em" px="1em" textAlign="center">Lo sentimos, esta página no existe</Text>
                       </Flex>
                    </Flex>
                </Content>
            </Layout>
       </>
    )
}

