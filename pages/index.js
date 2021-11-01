import Head from "next/head";
import NavBar from "../components/NavBar";
import Section1 from "../components/landing/Section1";

function Index(props) {
  const { posts = [] } = props;
  return (
    <>
    <Head>
      <title>Desarrolladores Hispanos</title>
    </Head>
      <NavBar />
      <Section1 />
    </>
  );
}

export default Index;
