import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  IconButton,
  Link,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { FaTwitter } from "react-icons/fa";
import client from "../public/client.js";

export default function SocialProfileSimple(props) {
  return (
    <>
      <Box
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        //  p={6}
        textAlign={"center"}
      >
        <Image
          rounded={"lg"}
          h={"100px"}
          w={"full"}
          boxShadow={"2xl"}
          src={
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
          objectFit={"cover"}
        />

        <Flex w={"full"} mt={-58} justify={"center"}>
          <Avatar
            size={"xl"}
            src={props.authorImage}
            mb={4}
            pos={"relative"}
            boxShadow={"0 0 15px 0 rgb(23 255 138 / 35%)"}
          />
        </Flex>
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{props.username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={10}
        >
          <BlockContent blocks={props.bio} {...client.config()} />
        </Text>
        <Stack mt={2} mb={5} direction={"row"} spacing={4} justify="center">
          <NextLink
            href={`https://twitter.com/${props.twitter}`}
            passHref
            key=" "
          >
            <IconButton
              mt={2}
              mr={2}
              variant="ghost"
              size="lg"
              icon={<FaTwitter />}
            />
          </NextLink>
        </Stack>
      </Box>
    </>
  );
}
