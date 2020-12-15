import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <html lang="en-US">
          <Head>
              <link rel="manifest" href="../static/manifest.json" />

              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="application-name" content="hecker-next" />
              <meta name="apple-mobile-web-app-title" content="hecker-next" />
              <meta name="theme-color" content="#f60" />
              <meta name="msapplication-navbutton-color" content="#f60" />
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
              />
              <meta name="msapplication-starturl" content="/" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />

              <link
                rel="icon"
                type="image/png"
                sizes="512x512"
                href="/static/icons/icon-512x512.png"
              />
              <link
                rel="apple-touch-icon"
                type="image/png"
                sizes="512x512"
                href="/static/icons/icon-512x512.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="192*192"
                href="/static/icons/icon-192x192.png"
              />
              <link
                rel="apple-touch-icon"
                type="image/png"
                sizes="192*192"
                href="/static/icons/icon-192x192.png"
              />
          </Head>
          <body>
              <Main/>
              <NextScript/>
          </body>
        </html>
      </Html>
    );
  }
}
export default MyDocument;
