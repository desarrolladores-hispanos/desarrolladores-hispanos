// import markdownStyles from './markdown-styles.module.css';
import BlockContent from "@sanity/block-content-to-react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Stack,
  Text,
  Box,
  Link,
  chakra,
  Heading,
  Code,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import client from "../public/client";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function PostBody({ content }) {
  const Wrapper = chakra(BlockContent);
  const serializers = {
    types: {
      code: (props) => (
        <Highlight
          {...defaultProps}
          code={props.node.code}
          language={props.node.language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                padding: "14px",
                overflowX: "scroll",
                fontSize: "14px",
              }}
            >
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });
                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      ),
      sanityImage: (props) => {
        <Box py="1">
          <Image
            src={urlFor(props.node.asset).auto("format").fit("scale").url()}
            alt={props.node.caption}
            width={props.node.dimensions.width}
            height={props.node.dimensions.height}
          />
        </Box>
      },

      block(props) {
        switch (props.node.style) {
          case "h1":
            return (
              <Heading as="h1" pt="4" fontSize={{ base: "4xl", md: "5xl" }}>
                {props.children}
              </Heading>
            );
          case "h2":
            return (
              <Heading as="h2" pt="4" fontSize={{ base: "3xl", md: "4xl" }}>
                {props.children}
              </Heading>
            );
          case "h3":
            return (
              <Heading as="h3" pt="4" fontSize={{ base: "2xl", md: "3xl" }}>
                {props.children}
              </Heading>
            );
          case "h4":
            return (
              <Heading as="h4" pt="2" fontSize={{ base: "xl", md: "2xl" }}>
                {props.children}
              </Heading>
            );
          case "h5":
            return (
              <Heading as="h5" pt="2" fontSize="xl">
                {props.children}
              </Heading>
            );
          case "h6":
            return (
              <Heading as="h6" pt="2" fontSize="xl">
                {props.children}
              </Heading>
            );
          case "blockquote":
            return (
              <Text
                fontSize="xl"
                p={{ base: "2", md: "4" }}
                fontWeight="light"
                fontStyle="italic"
              >
                {props.children}
              </Text>
            );
          default:
            return <Text>{props.children}</Text>;
        }
      },
    },

    marks: {
      code: (mark) => { <Code>{mark.children}</Code> },
      link: ({ mark, children }) => {
        const { blank, href, own } = mark;
        if (blank) {
          return (
            <Link color="red.300" href={href} isExternal>
              {children}&nbsp;
              <ExternalLinkIcon />
            </Link>
          );
        }
        if (own) {
          return (
            <NextLink href={href} passHref>
              <Link as="a" style={{ color: "salmon" }}>
                {children}
              </Link>
            </NextLink>
          );
        }
        if (!own || !blank)
          return (
            <Link as="a" href={href} style={{ color: "salmon" }}>
              {children}
            </Link>
          );
      },
    },
  };
  return (
    <Stack
      as={Wrapper}
      spacing={2}
      blocks={content}
      serializers={serializers}
    />
  );
}
