import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  IconButton,
  Image,
  Flex,
  Button,
  SlideFade,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogBody,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import NextLink from "next/link";
import { FaTwitter } from "react-icons/fa";
import Post from "./PostBody"

export default function Profile(props) {
  return (
    <>
      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.4 } }}
      >
        <Center>
          <Box
            maxW={"800px"}
            w={"full"}
            bg={"gray.900"}
            boxShadow={"2xl"}
            rounded={"lg"}
            //  p={6}
            textAlign={"center"}
          >
            <Image
              rounded={"lg"}
              h={"100px"}
              w={"full"}
              alt=""
              boxShadow={"2xl"}
              src={
                props.banner
              }
              objectFit={"cover"}
            />

            <Flex w={"full"} mt={-58} justify={"center"}>
              <Avatar
                size={"xl"}
                src={props.authorImage}
                mb={4}
                pos={"relative"}
                css={{
                  outline: "10px solid #171923",
                }}
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
              color={"gray.400"}
              px={10}
            >
              <Post content={props.bio} />
            </Text>
            <Stack mt={2} mb={5} direction={"row"} spacing={4} justify="center">
            <TwitterAlert twitter={props.twitter}/>
            </Stack>
          </Box>
        </Center>
      </SlideFade>
    </>
  );
}

const TwitterAlert = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <>

        <IconButton
          mt={2}
          mr={2}
          variant="ghost"
          size="lg"
          onClick={() => setIsOpen(true)}
          icon={<FaTwitter />}
        />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered={true}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Redirección externa
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estas seguro de que quieres dirigirte a Twitter.com?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <NextLink href={`https://twitter.com/${props.twitter}`} passHref key=" ">
                <Button colorScheme="green" ml={3}>
                  Estoy Seguro
                </Button>
              </NextLink>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};