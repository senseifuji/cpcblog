
import {Flex, Text, Image, Box} from '@chakra-ui/core'
import Link from 'next/link'

const IntegranteDetail = ({title, role, membersince, photouRL, mail, twitter, phone, links}) => {
    return ( 
        <Flex justify="space-around" alignItems="top" height={["auto", "auto", "90vh", "90vh"]} direction={["column", "column", "row", "row"]} width="100%">
            <Flex  bg="cpc.white" color="cpc.red" direction="column" justify="center" alignItems="center" width="100%" py={10}>
                <Box fontSize={["1.5em", "2.5em", "3em", "3em"]} lineHeight={["1em"]} textAlign="center">
                    <Text fontFamily="cpc.gothamMedium" ><b>{title}</b></Text>
                    <Text fontFamily="cpc.gothamMedium" ><b>{role}</b></Text>
                    <Text fontFamily="cpc.gothamMedium" ><b>{membersince}</b></Text>
                </Box>
                <Image src={photouRL} alt={title} mt={[3]} width={["15em", "15em", "18em", "18em"]} />            
                <Box fontSize={["1em", "2em", "2em", "2em"]} lineHeight={["1em"]}>
                    {mail && (
                        <Link href={`mailto:${mail}`}>
                            <a>
                                <Flex direction="row" justify="left" alignItems="center">
                                    <Image src="/images/mailicon.svg" alt="mailicon" mt={[3]}width="30px" mx={["0.25em"]}/>            
                                    <Text fontFamily="cpc.gothamCondensed">{mail}</Text>
                                </Flex>
                            </a>
                        </Link>
                    )}
                    {twitter && (
                        <Link href={`http://twitter.com/${twitter}`}>
                            <a>
                                    <Flex direction="row" justify="left" alignItems="center">
                                        <Image src="/images/twittericon.svg" alt="mailicon" mt={[3]}width="30px" mx={["0.25em"]}/>            
                                        <Text fontFamily="cpc.gothamCondensed">{twitter}</Text>
                                    </Flex>
                            </a>
                        </Link>
                    )}
                     {phone && (
                         <Link href={`tel:${phone}`}>
                            <a>
                                <Flex direction="row" justify="left" alignItems="center">
                                    <Image src="/images/phoneicon.svg" alt="mailicon" mt={[3]}width="30px" mx={["0.25em"]}/>            
                                    <Text fontFamily="cpc.gothamCondensed">{phone}</Text>
                                </Flex>
                            </a>
                        </Link>
                     )}
                </Box>
            </Flex>
            {/* LINKS SECTION */}
            <Flex bg="cpc.red" color="cpc.white" direction="column" justify="center" alignItems="center" width="100%" py={10}>
                <Flex fontSize={["1.5em", "2.25em", "3em", "3em"]} lineHeight={["1.5em", "1.5em", "1.25em", "1.25em"]} direction="column">
                {links && links.length > 0 && 
                    links.map(link => {
                        return <Link href={link.url} key={link.title} ><a><Text fontFamily="cpc.gothamCondensed" as="u">{link.title}</Text></a></Link>
                    })
                }
                </Flex>
            </Flex>                    
        </Flex>
    );
}
 
export default IntegranteDetail;