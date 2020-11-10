import { Flex, Text, Collapse, Button} from "@chakra-ui/core";
import {useState} from 'react';
import BlockContent from '@sanity/block-content-to-react'


const FaqItem = ({question, answer}) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);



    return (
        <Flex direction="column" width="100%" my={[2, 5, 5, 5]}>
            <Flex my={5} px={5} direction="column" alignItems="center" justify="center">
                <Text textAlign="center" fontSize={["1em", "1.5em", "2em","2em"]} fontFamily="cpc.gothamBold" lineHeight={["1em"]}><b>{question}</b></Text>
                
            </Flex>
            <Flex direction="column" alignItems="center">
                <Collapse  px={10} isOpen={show} fontSize={["1em", "1.25em", "1.25em","1.5em"]} color="cpc.black"fontFamily="cpc.gothamCondensed" my={[5, 3, 3, 3]}>
                    <BlockContent 
                        blocks={answer}
                    />
                </Collapse>
                <Button bg="cpc.red" color="cpc.white" _hover={{bg: "cpc.red"}} size="sm" onClick={handleToggle} mt={["0rem", "1rem", "1rem", "1rem"]} width={["100%", "50%", "200px", "150px"]}>
                     {show ? "Cerrar" : "Ver Respuesta"}
                </Button>
            </Flex>
        </Flex>

    )
}
 
export default FaqItem;