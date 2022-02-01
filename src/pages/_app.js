import "@styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Head from "next/head";
import { useState } from "react";
import UserState from "@context/user/UserState";

function Application({ Component, pageProps }) {
  const [post, setPost] = useState("");
  return (
    <UserState>
      <div>
        <Head>
          <link
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} post={post} setPost={setPost} />
      </div>
    </UserState>
  );
}

export default Application;
