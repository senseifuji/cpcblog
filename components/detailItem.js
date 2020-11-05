import { Heading, Text } from '@chakra-ui/core';
import Image from 'next/image'
import {urlFor} from '../lib/api'


const DetailItem = ({title, author, date, coverImage}) => {
    return ( 
       <>
        <Heading>{title}</Heading>
        <Text>Escrito por {author}</Text>
        <Text>Fecha {date}</Text>
        <Image
            src={urlFor(coverImage).height(400).url()}
            alt={title}
            unsized="true"
        />
       </>
     );
}
 
export default DetailItem;