import { Flex, Text } from "@chakra-ui/core";

const FaqItem = ({faqs}) => {
    return (
        <Flex my={5} direction="column">
            <Text><b>{faqs.question}</b></Text>
            <Text>{faqs.answer}</Text>
        </Flex>

    )
}
 
export default FaqItem;