import Head from "next/head";
import NavBar from "../components/NavBar";
import Section1 from "../components/landing/Section1";

function Index(props) {
  const { posts = [] } = props;
  return (
    <>
      <NavBar />
      <Section1 />
    </>
  );
}

export default Index;
