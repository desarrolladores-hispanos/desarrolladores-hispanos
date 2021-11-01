import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme"

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
