import Head from "next/head";
import NavBar from "../../components/NavBar";
import Link from "next/link";
import groq from "groq";
import client from "../../public/client";

function Index(props) {
    const { posts = [] } = props;
    return (
      <>
        <NavBar />
        {posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link
                  prefetch
                  href="/blog/[slug]"
                  as={`/blog/${slug.current}`}
                >
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </>
    );
  }
  
  Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && "Blog" in categories[]->title]
      |order(publishedAt desc)
    `),
  });
  
  export default Index;
  