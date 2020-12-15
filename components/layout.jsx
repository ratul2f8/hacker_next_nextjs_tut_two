import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChnageError = () => NProgress.done();
Router.onRouteChangeComplete = () => NProgress.done();
const Layout = ({ children, title, description, backButton }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap"
        />
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <nav>
          {backButton && (
            <span className="back-button" onClick={() => Router.back()}>
              &#x2b05;
            </span>
          )}
          <Link href="/">
            <a>
              <span className="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #f6f6ef;
          }
          nav {
            background: #f60;
            padding: 1em;
          }
          nav > * {
            display: inline-block;
            color: black;
          }
          nav a {
            text-decoration: none;
          }
          nav .main-title {
            font-weight: bold;
            margin-left: 1.5em;
          }
          nav .back-button {
            font-weight: bold;
          }
          nav .back-button:hover {
            cursor: pointer;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            background: white;
            font-family: "Andika New Basic", sans;
          }
          @font-face {
            font-family: "Andika New Basic", sans;
          }
        `}
      </style>
    </div>
  );
};
export default Layout;
