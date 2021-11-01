import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";
import client from "../../public/client.js";
import NavBar from "../../components/NavBar";
import Profile from "../../components/ProfileSmall";
import Post from "../../components/PostBody";
import Head from "next/head";
import { Divider, Stack, Container, SlideFade, Text, Heading } from "@chakra-ui/react";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Article = (props) => {
  //console.log(props)
  const {
    title = "Missing title",
    name = "Missing name",
    user,
    publishedAt,
    twitter,
    authorImage,
    banner = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
    body = [],
  } = props;
  return (
    <>
      <Head>
        <title>{title} - Recursos</title>
      </Head>
      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.4 } }}
      >
        <NavBar />
        <Container maxW={"100%"}>
          <Container maxW={"4xl"} h={{ base: "150%", lg: "50vh" }}>
            <Stack
              align={"left"}
              spacing={{ base: 5, md: 5 }}
              py={{ base: 10, md: 35 }}
            >

              <Heading
                fontWeight={700}
                fontSize={{ base: "4xl", md: "5xl" }}
                color={"white"}
                pl={"5"}
                lineHeight={"100%"}
              >
                {title}
              </Heading>

              <Text color={"gray.400"} pl={"5"}>
                Publicado el{" "}
                {new Date(publishedAt).toLocaleDateString("es-MX", options)}
              </Text>

              <Divider orientation="horizontal" />

              <Post content={body} />

              <Divider orientation="horizontal" />

              <Heading
                fontWeight={500}
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"white"}
                lineHeight={"80%"}
                pl={"5"}
              >
                Autor
              </Heading>

              <Profile
                name={name}
                username={user}
                twitter={twitter}
                banner={urlFor(banner)}
                authorImage={urlFor(authorImage)}
              />
            </Stack>
          </Container>
        </Container>
      </SlideFade>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "user": author->slug.current,
  "twitter": author->twitter,
  "authorImage": author->image,
  "banner": author->banner,
  "categories": categories[]->title,
  publishedAt,
  body
}`;

Article.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Article;
