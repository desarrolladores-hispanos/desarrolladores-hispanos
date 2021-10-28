import { useState } from "react";
import {
  useColorModeValue,
  SlideFade,
  List,
  Flex,
  Box,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { FaDiscord } from "react-icons/fa";

const buttons = [
  { name: "Recursos", url: "/recursos" },
  { name: "Blog", url: "/blog" },
  { name: "Acerca", url: "/acerca" },
];

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <Button variant="link">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9538 11.4091C21.9538 10.6309 22.5738 10 23.3385 10H28.0462V22.4H41.6154C42.3801 22.4 43 23.0309 43 23.8091V33.3909H38.2923C37.5276 33.3909 36.9077 32.76 36.9077 31.9818V28.6H28.0462V39.5909C28.0462 40.3691 27.4262 41 26.6615 41H8.38462C7.61992 41 7 40.3691 7 39.5909V23.8091C7 23.0309 7.61992 22.4 8.38462 22.4H19.1846V27.1909C19.1846 27.9691 18.5647 28.6 17.8 28.6H13.0923V34.8H21.9538V11.4091Z"
            fill="#FBE122"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.9077 36.2091C36.9077 35.4309 37.5276 34.8 38.2923 34.8H43V41H38.2923C37.5276 41 36.9077 40.3691 36.9077 39.5909V36.2091ZM39.9923 36.1405C40.0325 36.0549 40.1522 36.0549 40.1923 36.1405L40.6646 37.1478C40.6808 37.1822 40.7129 37.206 40.7501 37.211L41.8374 37.3569C41.9298 37.3693 41.9668 37.4851 41.8992 37.5504L41.1038 38.3188C41.0766 38.3451 41.0643 38.3836 41.0711 38.4211L41.2708 39.5186C41.2878 39.6118 41.191 39.6834 41.1091 39.6382L40.1451 39.1058C40.1122 39.0876 40.0724 39.0876 40.0395 39.1058L39.0755 39.6382C38.9937 39.6834 38.8968 39.6118 38.9138 39.5186L39.1135 38.4211C39.1203 38.3836 39.108 38.3451 39.0808 38.3188L38.2854 37.5504C38.2178 37.4851 38.2548 37.3693 38.3472 37.3569L39.4345 37.211C39.4717 37.206 39.5039 37.1822 39.52 37.1478L39.9923 36.1405Z"
            fill="#FBE122"
          />
        </svg>
      </Button>
    </NextLink>
  </>
);

const Buttons = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Box as="nav" display="flex" alignItems="center" fontWeight="500">
      <Flex>

        {/* Computador */}
        <List
          bg="transparent"
          color="white"
          display={["none", "none", "flex", "flex"]}
          position="static"
          top="5rem"
          left="5%"
          right="5%"
          py="2"
          px="4"
          alignItems="center"
          zIndex="2"
        >
          {buttons.map(({ name, url }) => (
            <NextLink href={url} passHref key={url}>
              <Button as="a" variant="ghost" mx="3" aria-label={name}>
                {name}
              </Button>
            </NextLink>
          ))}

          <NextLink href="https://discord.gg/5SvpxQMkUH" passHref key=" ">
            <Button
              leftIcon={<FaDiscord />}
              as="a"
              variant="solid"
              mx="3"
              aria-label="Discord"
              bgGradient="linear(to-b, #5865f2, #7782FF)"
              boxShadow={"0 5px 20px 0px rgb(88 101 242 / 43%)"}
            >
              Discord
            </Button>
          </NextLink>
        </List>

        {/* Barras Movil */}
        <Flex
          w="100vw"
          zIndex="10"
          display={["flex", "flex", "none", "none"]}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          color="white"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<HamburgerIcon />}
              onClick={() => changeDisplay("flex")}
            />
          </Flex>
        </Flex>

        {/* Menu Movil */}

        <Flex
          w="100vw"
          display={display}
          bgColor="gray.900"
          zIndex="10"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          color="white"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            {buttons.map(({ name, url }) => (
              <NextLink href={url} passHref key={url}>
                <Button as="a" variant="ghost" aria-label={name} my={8} w="70%">
                  {name}
                </Button>
              </NextLink>
            ))}

            <NextLink href="https://discord.gg/5SvpxQMkUH" passHref key=" ">
              <Button
                leftIcon={<FaDiscord />}
                as="a"
                variant="solid"
                aria-label="Discord"
                my={8}
                w="70%"
                bg="#5865f2"
              >
                Discord
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export const NavBar = () => (
  <>
    <SlideFade
      direction="top"
      in={true}
      transition={{ enter: { duration: 0.4, delay: 0.2 } }}
    >
      <Box as="header" boxShadow="md" bg="gray.900">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          h="4rem"
          px={[4, 6, 14, 14, 40]}
          mx="auto"
        >
          <Logo />
          <Buttons />
        </Box>
      </Box>
    </SlideFade>
  </>
);

export default NavBar;
