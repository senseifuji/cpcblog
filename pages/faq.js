import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content';
import FaqItem from '../components/faqItem';
import Section from '../components/section';
import {getAllFaqs} from '../lib/api'
import customtheme from '../customtheme.js'
import { Flex, Text } from '@chakra-ui/core';




export default function FaqPage({faqs}) {
    const {colors} = customtheme

    return (
        <Layout title="Preguntas frecuentes de - CPC Anticorrupcion">
            <Header position="fixed"/>
            <Content>
                {/* Top SECTION */}
                <Section bg="cpc.red" color="cpc.white" 
                    splitBiBottom="true"
                    splitBiBottomColorOne={colors.cpc.red}
                    splitBiBottomColorTwo={colors.cpc.white}
                >
                    <Text fontSize={["1.25em", "1.5em", "3em", "3em"]} fontFamily="cpc.gothamBold" textAlign="center" lineHeight="1.18em">
                        <b>Preguntas <br/> frecuentes del cpc</b>
                    </Text>
                </Section>  
                <Section bg="cpc.white" color="cpc.red">
                    <Flex direction="column" height="100vh">
                        {faqs.map(faq => <FaqItem key={faq._id} question={faq.question} answer={faq.answer}/>)}
                    </Flex>
                </Section>
            </Content>
        </Layout>
    )
}

//this functions run on build time on server.
//provides props to your page, and makes it static
export async function getStaticProps(){
    let faqs;
    try{
        const response = await getAllFaqs();
        faqs = response
    } catch(e){
        faqs = []
    }

    return {
        props: {
            faqs
        }
    }

}
