import {
  SlideFade,
  List,
  Flex,
  Avatar,
  Stack,
  Box,
  Text,
  Button,
  Image,
  Heading,
  IconButton,
} from "@chakra-ui/react";

export const ProfileCard = () => (
  <>
    <SlideFade
      direction="bottom"
      in={true}
      transition={{ enter: { duration: 0.3, delay: 0.4 } }}
    >
      <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: "8vw", md: "25vw" }}
        mt={{ base: "5vh", md: "10vh" }}
      >
        <Box
          maxW={"5xl"}
          position="relative"
          w={"full"}
          bgColor="#18191C"
          justifyContent={"center"}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"170px"}
            w={"full"}
            src={
              "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            }
            objectFit={"cover"}
          />

          <Flex
            mt={-58}
            justify={{ base: "center", md: "left" }}
            ml={{ base: "0vw", md: "10vw" }}
          >
            <Avatar
              size={"2xl"}
              src={
                "https://images.unsplash.com/photo-1621508638997-e30808c10653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              }
              alt={"Author"}
              css={{
                border: "10px solid #18191C",
              }}
            />
          </Flex>

          <Stack spacing={{ base: 5, md: 5 }} py={{ base: 1, md: 1 }}>
            <Flex
              justify={{ base: "center", md: "left" }}
              ml={{ base: "0vw", md: "10vw" }}
            >
              <Heading color={"white"} lineHeight={"80%"}>
                John Doe{" "}
                <Text
                  as={"span"}
                  color={"#B9BBBE"}
                  fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                  fontWeight={600}
                >
                  @johndoe
                </Text>
              </Heading>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </SlideFade>
  </>
);

export default ProfileCard;
