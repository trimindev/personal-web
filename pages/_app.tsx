import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>{`<trimindev/>`}</title>
        <link rel="icon" href={"/icons/logo.svg"} />
      </Head>

      <Navbar />
      {/* h-[2000px] */}
      <main className="mt-16 sm:mt-20  mx-auto max-w-screen-lg ">
        <Component {...pageProps} />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
