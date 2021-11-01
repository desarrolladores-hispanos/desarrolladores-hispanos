import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";
import client from "../../public/client.js";
import NavBar from "../../components/NavBar";
import Profile from "../../components/Profile";
import Head from "next/head";
import { Stack, Container, SlideFade } from "@chakra-ui/react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Main = (props) => {
  //console.log(props)
  const {
    name = "Not Fetched",
    user = "Not Fetched",
    twitter = "dh_rblx",
    authorImage = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
    banner = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
    bio = [],
  } = props;
  return (
    <>
      <Head>
        <title>{name} - Perfil</title>
      </Head>
      <NavBar />

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.4 } }}
      >
        <Container maxW={"100%"}>
          <Container maxW={"4xl"} h={{ base: "150%", lg: "50vh" }}>
            <Stack
              align={"left"}
              spacing={{ base: 5, md: 5 }}
              py={{ base: 10, md: 35 }}
            >
              <Profile
                name={name}
                username={user}
                twitter={twitter}
                banner={urlFor(banner)}
                bio={bio}
                authorImage={urlFor(authorImage)}
              />
            </Stack>
          </Container>
        </Container>
      </SlideFade>
    </>
  );
};

const query = groq`*[_type == "author" && slug.current == $slug][0]{
  name,
  "user": slug.current,
  "authorImage": image,
  twitter,
  banner,
  bio,
}`;

Main.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Main;