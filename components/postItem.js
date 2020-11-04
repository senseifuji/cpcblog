import { Flex, Text } from "@chakra-ui/core";
import Link from 'next/link'
import Image from 'next/image'
import {urlFor} from '../lib/api'



const PostItem = ({title, author, date, image, url}) => {
    return ( 
         <Flex my={5} direction="column">
            <Link href={url}>
                <a><b>{title}</b></a>
            </Link>
            <Text>Creado por: {author.name}</Text>
            <Text>Fecha {date}</Text>
            <Image
                src={urlFor(image).height(300).url()}
                alt="Foto de publicación del CPC Chihuahua"
                unsized="true"
            />

        </Flex>

     );
}
 
export default PostItem;