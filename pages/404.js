import NavBar from "../components/NavBar";
import { Text, Stack, Heading, Box, Button, SlideFade } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>¡404!</title>
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
              404
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
              width={{ base: "90%", md: "60%" }}
              color="gray.400"
            >
              La pagina solicitada no existe o fue eliminada.
              Nuestra pagina aún está en desarrollo por esto es probable de que no este disponible.
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
