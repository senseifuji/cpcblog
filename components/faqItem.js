import { Flex, Text, Collapse, Button} from "@chakra-ui/core";
import {useState} from 'react';
import BlockContent from '@sanity/block-content-to-react'

const FaqItem = ({question, answer}) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex 
        direction="column" 
        width="100%">
            <Flex  
            direction="column" 
            alignItems="center" 
            justify="center">
                <Text fontFamily='cpc.gothamCondensed' 
                fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
                fontWeight="300" 
                color="cpc.black"
                textAlign="center" 
                d="inline-flex" 
                alignItems="center" 
                mt={["1em", "0.75em", "0em", "0em"]}>
                    {question}
                </Text>
            </Flex>
            <Flex 
            direction="column" 
            alignItems="center">
                <Collapse  
                isOpen={show}
                color="cpc.black" 
                px={["1.5em", "1em", "1em", "1em"]} 
                py={["0.5em", "1em", "1em", "1em"]} 
                fontFamily="cpc.gothamCondensedBook" 
                fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                textAlign="left" 
                lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}>
                    <BlockContent 
                        blocks={answer}
                    />
                </Collapse>
                <Button bg="cpc.yellow" 
                color="cpc.black" 
                _hover={{bg: "cpc.yellowLight"}} 
                size="sm" 
                onClick={handleToggle} 
                mt={["0rem", "1rem", "1rem", "1rem"]} 
                width="140px">
                    {show ? "Cerrar" : "Ver Respuesta"}
                </Button>
            </Flex>
        </Flex>
    )
}
 
export default FaqItem;
