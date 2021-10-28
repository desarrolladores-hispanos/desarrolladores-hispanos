import { useState } from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  SlideFade,
  Container,
  Button,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import TextLoop from "react-text-loop";
import { FaDiscord, FaGlobe } from "react-icons/fa";

export default function Section1() {
  return (
    <>
      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.5 } }}
      >
        <Container maxW={"100%"}>
            <Container maxW={"5xl"} h={{ base: "150%", lg: "50vh" }}>
              <Stack
                textAlign={"center"}
                align={"center"}
                spacing={{ base: 5, md: 5 }}
                py={{ base: 50, md: 48 }}
              >
                <Heading
                  fontWeight={800}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  color={"white"}
                  lineHeight={"80%"}
                >
                  <TextLoop>
                    <span>Aprende</span>
                    <span>Diseña</span>
                    <span>Construye</span>
                    <span>Comparte</span>
                    <span>Descubre</span>
                    <span>Traduce</span>
                    <span>Programa</span>
                    <span>Produce</span>
                    <span>Desarrolla</span>
                    <span>Explora</span>
                    <span>Disfruta</span>
                    <span>Contribuye</span>
                    <span>Modela</span>
                    <span>Compone</span>
                    <span>Crea</span>
                  </TextLoop>{" "}
                  <Text
                    as={"span"}
                    color={"gray.400"}
                    fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    fontWeight={600}
                  >
                    con Desarrolladores Hispanos
                  </Text>
                </Heading>

                <Text color={"gray.500"} maxW={"3xl"}>
                  En Desarrolladores Hispanos puedes aprender y reforzar tus
                  conocimientos en diferentes areas de desarrollo de Roblox, con
                  una amplia galeria de recursos y documentacion en Español!
                </Text>

                <Container>
                  <Stack spacing={3} direction={["column", "row"]}>
                    <NextLink href="/recursos" passHref key=" ">
                      <Button
                        leftIcon={<FaGlobe />}
                        as="a"
                        variant="solid"
                        mx="1"
                        aria-label="Recursos"
                        bgGradient="linear(to-b, #58BBF2, #77BEFF)"
                      >
                        Explorar Recursos
                      </Button>
                    </NextLink>

                    <NextLink
                      href="https://discord.gg/5SvpxQMkUH"
                      passHref
                      key=" "
                    >
                      <Button
                        leftIcon={<FaDiscord />}
                        as="a"
                        variant="solid"
                        mx="1"
                        aria-label="Discord"
                        bgGradient="linear(to-b, #5865f2, #7782FF)"
                      >
                        Unirse a la Comunidad
                      </Button>
                    </NextLink>
                  </Stack>
                </Container>
              </Stack>
            </Container>
        </Container>
      </SlideFade>
    </>
  );
}
