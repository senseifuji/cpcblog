import { Box, Text, Flex, Image} from '@chakra-ui/core';
import {urlFor} from '../lib/api'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
import {useRouter} from 'next/router'


const serializers = {
    types: {
      youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} containerClassName="youtubecontainer"/>)
      },
      image: ({node}) => {
        const {asset, imageposition = 'imagecenter'} = node
      
        return (
            <div className={`blog-image ${imageposition}`}>
              <img src={urlFor(asset).url()} alt=""/>
            </div>
        )
      }, 
      block: (props) => {
        if(props.node.style === 'normalright'){
          return <p className="textright">{props.children}</p>
        } else if(props.node.style === 'normalcenter'){
          return <p className="textcenter">{props.children}</p>
        } else if(props.node.style === 'normalleft'){
          return <p className="textleft">{props.children}</p>
        } else if(props.node.style === 'h1'){
          return <h1>{props.children}</h1>
        } else if(props.node.style === 'h2'){
          return <h2>{props.children}</h2>
        } else if(props.node.style === 'h3'){
          return <h3>{props.children}</h3>
        } else if(props.node.style === 'h4'){
          return <h4>{props.children}</h4>
        } else if(props.node.style === 'h5'){
          return <h5>{props.children}</h5>
        } else if(props.node.style === 'h6'){
          return <h6>{props.children}</h6>
        } else if(props.node.style === 'blockquote'){
          return <blockquote>{props.children}</blockquote>
        }
        else {
          return props.children
        }
      }      
    }
}



// COMPONENT
const DetailItem = ({title, author, date, coverImage, content}) => {
    let parsedDate = moment(date, 'YYYY-MM-DD').format('D [de] MMMM  YYYY')
    const router = useRouter()
    const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + router.asPath

    const twShareUrl = encodeURI(`https://twitter.com/share?text=${title} ${currentUrl}`)
    const fbShareUrl = encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`)
    const waShareUrl = encodeURI(`https://wa.me/?text=${title} ${currentUrl}`)
    
    return ( 
       <>
        <Flex direction="column" justify="center" alignItems="center">
          {/* header */}
          <Flex direction="column" p={4} justify="center" alignItems="center" width={["100%", "100%", "100%", "900px"]}>
              <Text mt={["0.5em", "0.5em", "1.25em", "1.25em"]} fontFamily="cpc.gothamCondensed" lineHeight="1em" fontSize={["1.5em", "2.5em", "2.75em", "3em"]}><b>{title}</b></Text>
              <Flex direction={["column", "row", "row", "row"]} justify="space-evenly" width="100%" alignItems="center" mt={["1.25em", "1.25em", "1.25em", "1.25em"]} mb={["1em"]}>
                <Flex direction={["column","row", "row", "row"]} justify="flex-start" alignItems="center" my={4} mt={3} width="100%">
                  <Image
                      src={urlFor(author.avatar).height(48).width(48).url()}
                      alt={author.name}
                      rounded="full"
                      unsized="true"
                  />
                  <Flex direction="column" alignItems={["center", "flex-start", "flex-start", "flex-start"]}>
                    <Text mx={2}  fontSize={["1em", "1em", "1.15em", "1em"]} color="cpc.black"><b>{author.name}</b></Text>
                    <Text mx={2} fontSize={["1em", "1em", "1.15em", "1.15em"]} fontFamily="cpc.gothamCondensedBook" color="cpc.black" lineHeight="1em">Publicado el día {parsedDate}</Text>
                  </Flex>
                </Flex>
                <Flex direction="row" alignItems="center" justify="center" textAlign="center">
                  <Text fontSize={["1em", "1em", "1.15em", "1.25em"]} fontFamily="cpc.gothamCondensed">Compartir:</Text>
                  <Link href={fbShareUrl}>
                    <a target="_blank">
                      <Text mx={2}>
                        <Image src="/images/facebook.svg" alt="mailicon" width="40px" mx={["0.25em"]}/>            
                      </Text>
                    </a>
                  </Link>
                  <Link href={twShareUrl}>
                     <a target="_blank">
                       <Text mx={2}>
                          <Image src="/images/twittericon.svg" alt="mailicon"  width="40px" mx={["0.25em"]}/>            
                       </Text>
                      </a>
                  </Link>
                  <Link href={waShareUrl}>
                      <a target="_blank">
                       <Text mx={2}>
                        <Image src="/images/whatsapp.svg" alt="mailicon" width="40px" mx={["0.25em"]}/>            
                       </Text>
                      </a>
                  </Link>
                </Flex>
              </Flex>
              {/* cover image */}
                <Image
                  src={urlFor(coverImage).height(500).url()}
                  alt={title}
                  unsized="true"
                />
          </Flex>


          {/* //content */}
          <Flex direction="column" justify="center" alignItems="center" width={["100%", "100%", "100%", "900px"]} p={4}>
            <Box fontFamily="cpc.gothamMedium" fontSize={["1.15em", "1.15em", "1.25em", "1.25em"]} lineHeight="1.7" my={["1em", "0em", "0em", "1em"]} width="100%">
              <BlockContent 
                imageOptions={{w: 900, h:500, fit: 'max'}}
                blocks={content}
                serializers={serializers}
                className="blogcontent"
            />
            </Box>
          </Flex>
            
        </Flex>
        
        

       </>
     );
}
 
export default DetailItem;