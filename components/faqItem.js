import { Flex, Text, Collapse, Button} from "@chakra-ui/core";
import {useState} from 'react';

const FaqItem = ({question, answer}) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);


    return (
        <Flex direction="column" width="100%" >
            <Flex my={5} px={5} direction="column" alignItems="center" justify="center">
                <Text textAlign="center" fontSize={["1em", "1.5em", "2em","2em"]} fontFamily="cpc.gothamBold" lineHeight={["1em"]}><b>{question}</b></Text>
                <Button bg="cpc.red" color="cpc.white" _hover={{bg: "cpc.red"}} size="sm" onClick={handleToggle} mt="1rem">
                     {show ? "Cerrar" : "Ver Respuesta"}
                </Button>
            </Flex>
            <Flex>
                <Collapse  px={5} isOpen={show} fontSize={["1em", "1.25em", "1.25em","1.5em"]} fontFamily="cpc.gothamMedium" mt={3}>{answer}</Collapse>
            </Flex>
        </Flex>

    )
}
 
export default FaqItem;