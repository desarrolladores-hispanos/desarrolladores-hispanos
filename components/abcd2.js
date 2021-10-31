import {
  Heading,
  Avatar,
  Box,
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
        maxW={"350px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        //  p={6}
        // textAlign={'center'}
      >
        <Image
          rounded={"lg"}
          h={"100px"}
          w={"full"}
          boxShadow={"2xl"}
          src={
            props.banner ||
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
          objectFit={"cover"}
        />

        <Flex w={"full"} mt={-58} ml="7">
          <Avatar
            size={"xl"}
            src={props.authorImage}
            pos={"relative"}
            css={{
              border: "5px solid #18191C",
            }}
          />
        </Flex>

        <Box width={"80%"} ml="7">
          <Link href={"/profile"}>
            <Heading fontSize={"xl"} fontFamily={"body"}>
              {props.name}
            </Heading>
          </Link>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @{props.username}
          </Text>
        </Box>
      </Box>
    </>
  );
}
