import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head />
        <body className="bg-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
