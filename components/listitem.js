import { Flex, Text, Image, Grid, Box} from "@chakra-ui/core";
import Link from 'next/link'
import {urlFor} from '../lib/api'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

const ListItem = ({title, author, date, image, url}) => {

    let parsedDate = moment(date, 'YYYY-MM-DD').format('D [de] MMMM  YYYY')

    return ( 
        <>
         <Flex my={5} direction="column"  width={["100%", "400px", "350px", "350px"]} height="auto" bg="cpc.white" m={2} borderWidth="2px" borderColor="cpc.black" rounded="3px">
            <Link href={url}>
                <a>
                    <Image
                    src={urlFor(image).height(200).width(300).url()}
                    alt="Foto de publicación del CPC Chihuahua"
                    unsized="true"
                    width={["100%"]}
                    />
                   <Flex direction="column" p={4} >
                        <Text mt={3} fontFamily="cpc.gothamCondensed" lineHeight="1em" fontSize={["1.5em", "2em", "2em", "2em"]} isTruncated><b>{title}</b></Text>
                        <Flex justify="flex-start" alignItems="center" my={4} mt={3}>
                            <Image
                                src={urlFor(author.avatar).height(48).width(48).url()}
                                alt={author.name}
                                rounded="full"
                                unsized="true"
                            />
                            <Text mx={2} fontSize={["1em", "1em", "1.15em", "1em"]} color="cpc.black"><b>{author.name}</b></Text>
                        </Flex>
                        <Text color="cpc.black" fontSize={["0.8em", "1em", "1em", "1em"]}><b>Publicado el {parsedDate}</b></Text>
                   </Flex>
                </a>
            </Link>
        </Flex>
        </>

     );
}
 
export default ListItem;