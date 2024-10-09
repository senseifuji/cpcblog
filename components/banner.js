import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../lib/sanity'

const Banner = ({ banner }) => {
  const imageProps = useNextSanityImage(client, banner.image);

  return (
    <Box 
      position="relative" 
      backgroundColor={banner.backgroundColor?.hex || 'transparent'}
      width="100%"
      height={banner.height || "auto"}
    >
      {banner.image && (
        <Image
          {...imageProps}
          alt={banner.title || 'Banner'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
      {banner.text && (
        <Text
          position="absolute"
          top={banner.textPosition === 'topLeft' || banner.textPosition === 'topRight' ? "10%" : 
               banner.textPosition === 'center' ? "50%" : "90%"}
          left={banner.textPosition === 'topLeft' || banner.textPosition === 'bottomLeft' ? "10%" : 
                banner.textPosition === 'center' ? "50%" : "90%"}
          transform={banner.textPosition === 'center' ? "translate(-50%, -50%)" : "none"}
          color={banner.textColor?.hex || 'white'}
          fontSize={banner.fontSize || "2xl"}
          fontWeight={banner.fontWeight || "bold"}
          fontFamily={banner.fontFamily || "inherit"}
          textAlign={banner.textPosition.includes('Left') ? "left" : 
                     banner.textPosition.includes('Right') ? "right" : "center"}
          maxWidth={banner.textMaxWidth || "80%"}
          padding={banner.textPadding || "2"}
          backgroundColor={banner.textBackgroundColor?.hex || 'transparent'}
          borderRadius={banner.textBorderRadius || "md"}
        >
          {banner.text}
        </Text>
      )}
    </Box>
  );
};

export default Banner;