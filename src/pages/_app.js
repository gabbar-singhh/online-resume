import "@/styles/globals.css";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnlineResumes.in</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UserProvider>
        <NavigationBar />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
