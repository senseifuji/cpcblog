import { Heading, Text } from '@chakra-ui/core';
import Image from 'next/image'
import {urlFor} from '../lib/api'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'


const serializers = {
    types: {
      youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      }
    }
}


const DetailItem = ({title, author, date, coverImage, content}) => {
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
        <BlockContent 
            imageOptions={{w: 320, h:240, fit: 'max'}}
            blocks={content}
            serializers={serializers}
        />
       </>
     );
}
 
export default DetailItem;