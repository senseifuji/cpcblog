import { Box, Image, Text, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

const IntegrantCard = ({ name, role, imageUrl, profileUrl, isFormer = false }) => {
  return (
    <Box textAlign="center" mb={4} mx={4}> 
      <NextLink href={profileUrl} passHref>
        <Link>
          <Image
            src={imageUrl}
            alt={name}
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
            mb={2}
          />
          <Text
            fontWeight="bold"
            fontSize="lg"
            noOfLines={1}
            width="200px"
            mx="auto"
          >
            {name}
          </Text>
          {role && (
            <Text fontSize="md" color="gray.600">
              {role}
            </Text>
          )}
          {isFormer && (
            <Text fontSize="sm" color="gray.500" fontStyle="italic">
              Expresidente
            </Text>
          )}
        </Link>
      </NextLink>
    </Box>
  );
};

export default IntegrantCard;
