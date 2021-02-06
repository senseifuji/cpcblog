import { Flex, Text, Collapse, Button} from "@chakra-ui/core";
import {useState} from 'react';
import BlockContent from '@sanity/block-content-to-react'

const FaqItem = ({question, answer}) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex 
        direction="column" 
        width="100%" 
        my={[2, 5, 5, 5]}>
            <Flex my={5} 
            px={5} 
            direction="column" 
            alignItems="center" 
            justify="center">
                <Text fontFamily='cpc.gothamCondensedBook' 
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
                px={10} 
                isOpen={show} 
                fontSize={["1.3em", "1.25em", "1.25em","1.5em"]} 
                color="cpc.black"
                fontFamily="cpc.gothamCondensed" 
                my={[5, 3, 3, 3]}>
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
                width={["100%", "50%", "200px", "150px"]}>
                    {show ? "Cerrar" : "Ver Respuesta"}
                </Button>
            </Flex>
        </Flex>
    )
}
 
export default FaqItem;
