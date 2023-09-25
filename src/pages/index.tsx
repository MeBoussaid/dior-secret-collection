import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import styles from "../styles/index.module.scss";
import LoginForm from "@/components/loginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>DIOR - Devine ...</title>
        <meta name="description" content="DIOR - Secret collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.background}>
          <Header />

          <div className={styles.greetingsContainer}>
            <span className={styles.greetingsFr}>BIENVENUE</span>
            <span className={styles.greetingsEn}>WELCOME</span>
            <span className={styles.greetingsJp}>いらっしゃいませ</span>
          </div>
          <div className={styles.loginFormContainer}>
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
}
