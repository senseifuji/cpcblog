import { Flex, Text } from "@chakra-ui/core";

const FaqItem = ({question, answer}) => {
    return (
        <Flex my={5} direction="column">
            <Text><b>{question}</b></Text>
            <Text>{answer}</Text>
        </Flex>

    )
}
 
export default FaqItem;