import { type NextPage } from "next";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

const Home: NextPage = () => {
  const [isDark, setIsDark] = useLocalStorage('darkTheme', true)
  const [post, setPost] = useState([])

  const toggle = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <Head>
        <title>iSearch</title>
        <meta name="description" content="A simple search engine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-theme={isDark ? "dark" : 'light'} className="min-w-screen min-h-screen overflow-hidden">
        <SearchBar post={post} setPost={setPost} toggle={toggle} isDark={isDark} />
        <SearchList post={post} />
      </main>
    </>
  );
};

export default Home;
