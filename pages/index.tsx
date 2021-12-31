import type { NextPage } from "next";
import Head from "next/head";
import { Board } from "../src/Board/Board";

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smooth Scrabble</title>
      </Head>
      <Board />
    </div>
  );
};

export default Main;
