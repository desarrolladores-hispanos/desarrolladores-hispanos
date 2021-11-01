import Head from "next/head";
import NavBar from "../../components/NavBar";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../public/client";
import {
  Stack,
  Center,
  Box,
} from "@chakra-ui/react";
import ListItem from "../../components/PostList"

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Index(props) {
  const {
    posts = [],
  } = props;
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <NavBar />

      <Center>
        <Stack maxW={"550px"} w={"full"} spacing={6} h={{ base: "150%", lg: "50vh" }} py={{ base: 10, md: 35 }}>
          {posts.map(
            ({ title = "Not Fetched",
              _id,
              name = "Not Fetched",
              slug,
              authorImage = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
              banner = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
              username = "404",
              publishedAt,
            }) =>
              slug && (
                <Box key={_id}>
                  <ListItem
                    title={title}
                    date={new Date(publishedAt).toLocaleDateString("es-MX", options)}
                    name={name}
                    username={username}
                    authorImage={urlFor(authorImage)}
                    banner={urlFor(banner)}
                    url={`/blog/${slug.current}`}
                  />
                </Box>))}
        </Stack>
      </Center>
    </>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && "Blog" in categories[]->title]|order(publishedAt){
        title,
        _id,
        slug,
        "name": author->name,
        "username": author->slug.current,
        "authorImage": author->image,
        "banner": mainImage,
        publishedAt,
      }
    `),
});

export default Index;
