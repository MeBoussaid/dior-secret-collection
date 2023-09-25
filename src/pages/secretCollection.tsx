import React from "react";
import Head from "next/head";
import HeaderConnected from "@/components/headerConnected";
import Carousel from "@/components/carousel";

const SecretCollection: React.FC = () => {
  return (
    <>
      <Head>
        <title>... Secret Collection - DIOR</title>
      </Head>

      <main>
        <HeaderConnected />
        <Carousel></Carousel>
      </main>
    </>
  );
};

export default SecretCollection;
