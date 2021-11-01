import NavBar from "../components/NavBar";
import {
  Text,
  Stack,
  Heading,
  Box,
  Button,
  Link,
  SlideFade,
} from "@chakra-ui/react";
import Head from "next/head";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>¡500!</title>
      </Head>
      <NavBar />
      <Stack
        as="main"
        spacing={50}
        justifyContent="center"
        alignItems="flex-start"
        px={{ base: "5vw", md: "10vw" }}
        mt={{ base: "15vh", md: "22.5vh" }}
      >
        <Stack spacing={2} justifyContent="flex-start" alignItems="flex-start">
          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.7 } }}
          >
            <Box position="relative">
              <Text
                size="md"
                fontWeight="medium"
                position="relative"
                zIndex={1}
              >
                Ups!
              </Text>
            </Box>
            <Heading
              size="4xl"
              lineHeight={"95%"}
              letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
              position="relative"
              zIndex={1}
            >
              500
            </Heading>
          </SlideFade>

          <SlideFade
            direction="top"
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Heading
              size="lg"
              fontWeight="300"
              letterSpacing="0.5px"
              color="gray.400"
            >
              Ha ocurrido un error con el servidor, Contacta a nuestro staff
              mediante{" "}
              <Link
                href="https://discord.gg/5SvpxQMkUH"
                color="#5865f2"
                isExternal
              >
                Discord <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              si el error persiste.
            </Heading>
          </SlideFade>
        </Stack>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1 } }}
        >
          <NextLink href="/" passHref key="home">
            <Button
              size="md"
              fontWeight="200"
              letterSpacing="0.5px"
              color="gray.400"
            >
              Ir al Incio
            </Button>
          </NextLink>
        </SlideFade>
      </Stack>
    </>
  );
}
