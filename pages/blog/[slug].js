import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";
import client from "../../public/client.js";
import NavBar from "../../components/NavBar";
import ABCD from "../../components/abcd2";
import Postt from "../../components/post";
import { Divider, Stack, Container, Text, Heading } from "@chakra-ui/react";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  //console.log(props)
  const {
    title = "Missing title",
    name = "Missing name",
    user,
    publishedAt,
    twitter,
    categories,
    authorImage,
    banner,
    body = [],
  } = props;
  return (
    <>
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

            <Postt content={body} />

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

            <ABCD
              name={name}
              username={user}
              twitter={twitter}
              banner={urlFor(banner)}
              authorImage={urlFor(authorImage)}
            />
          </Stack>
        </Container>
      </Container>
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

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
