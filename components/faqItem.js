import { Box, Text, Collapse, Button } from "@chakra-ui/react";
import { useState } from 'react';
import BlockContent from '@sanity/block-content-to-react'

const FaqItem = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Box 
            mb={6}
        >
            <Text 
                fontFamily='cpc.gothamCondensed' 
                fontSize={["1.5em", "1.5em", "1.7em", "1.7em"]} 
                fontWeight="300" 
                color="cpc.black"
                textAlign="center" 
                mt={["1em", "0.75em", "1em", "1em"]}
                mb={[".7em", "0.7em", "1em", "1em"]}
                px={["1em", "1em", "1em", "1em"]}
                lineHeight={["1.2em","1em","1em","1em"]}
            >
                {question}
            </Text>
            <Box 
                width={["100%","500px", "600px", "600px"]}
                mx="auto"
            >
                <Collapse in={show}>
                    <Box
                        color="cpc.black" 
                        px={["1.5em", "1em", "1em", "1em"]}
                        py={["1.5em", "1em", "1em", "1em"]}
                        fontFamily="cpc.gothamCondensedBook" 
                        fontSize={["1.3em", "1.3em", "1.4em", "1.4em"]} 
                        textAlign="left" 
                        lineHeight={["1.2em", "1.2em", "1.2em", "1.2em"]}
                    >
                        <BlockContent blocks={answer} />
                    </Box>
                </Collapse>
                <Box textAlign="center">
                    <Button 
                        bg="cpc.yellow" 
                        color="cpc.black" 
                        _hover={{bg: "cpc.yellowLight"}} 
                        size="sm" 
                        onClick={handleToggle} 
                        mt={4}
                        width="140px"
                    >
                        {show ? "Cerrar" : "Ver Respuesta"}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
 
export default FaqItem;