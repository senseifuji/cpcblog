import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IntegrantCard = ({ name, role, imageUrl, profileUrl, isFormer = false }) => (
  <Box
    maxWidth="200px"
    display="flex"
    flexDirection="column"
    backgroundColor="white"
    p="16px"
    m={2}
    opacity={isFormer ? 0.6 : 1}
    transition="opacity 0.3s"
    _hover={{ opacity: 1 }}
  >
    <Link href={profileUrl || "#"} passHref legacyBehavior>
      <a style={{ textDecoration: 'none' }}>
        <Box maxWidth="200px" maxHeight="200px" pb="16px" textAlign="center">
          <Image width={200} height={200} alt={name} src={imageUrl} />
        </Box>
        <Box maxWidth="200px">
          <Text as="span" fontFamily='cpc.gothamCondensed' color="black" fontSize="27px" fontWeight="300" textAlign="left" isTruncated>
            {name}
          </Text>
        </Box>
        <Box maxWidth="200px">
          <Text as="span" fontFamily='cpc.gothamCondensedBook' color="black" fontSize="27px" fontWeight="300" textAlign="left" isTruncated>
            {role}
          </Text>
        </Box>
      </a>
    </Link>
  </Box>
);

export default IntegrantCard;