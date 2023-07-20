import "@/styles/globals.css";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Resumes - Create Your Resume in Minutes</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <UserProvider>
        <NavigationBar />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
