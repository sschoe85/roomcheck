import GlobalStyle from "../styles";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Heading from "../components/Headings/Heading";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>LMG RoomCheck</title>
      </Head>
      <SessionProvider session={session}>
        <Heading>🏫✅ RoomCheck ✅🏫</Heading>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
