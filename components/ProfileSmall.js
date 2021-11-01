import {
  Heading,
  Avatar,
  Box,
  Text,
  Link,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function ProfileSmall(props) {
  return (
    <>
      <Box
        maxW={"350px"}
        w={"full"}
        bg={"gray.900"}
        boxShadow={"2xl"}
        rounded={"lg"}
      //  p={6}
      // textAlign={'center'}
      >
        <Image
          rounded={"lg"}
          h={"100px"}
          w={"full"}
          alt={""}
          boxShadow={"2xl"}
          src={
            props.banner
          }
          objectFit={"cover"}
        />

        <Flex w={"full"} mt={-58} ml="7">
          <Avatar
            size={"xl"}
            src={props.authorImage}
            pos={"relative"}
            css={{
              border: "5px solid #171923",
            }}
          />
        </Flex>

        <Box width={"80%"} ml="7">
          <Link href={`/u/${props.username}`}>
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
