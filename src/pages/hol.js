import Head from "next/head";
import Image from "next/image";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import NavBar from "@/components/navbar";
import FaveCarousel from "@/components/faveCarousel";
import { useState, useEffect } from "react";
import gameData from "../data/gameData.json";

export default function Home() {
  const [game, setGame] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const filteredGames = gameData.filter((obj) =>
    obj.hasOwnProperty("Critic_Score")
  );

  console.log(filteredGames);

  return (
    <>
      <Head>
        <title>GAME HoL</title>
        <meta
          name="description"
          content="Guess which game has the higher metacritic score"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <NavBar></NavBar>

        {game === "start" ? (
          <div className="h-screen justify-center items-center">
            <h1 className="text-4xl font-bold text-clay-100 text-center mt-8 mb-8">
              Guess which game has the higher metacritic score
            </h1>
            <div className="flex justify-center">
              <div
                className=" bg-clay-700 text-2xl hover:bg-clay-800 text-clay-100 hover:text-clay-200 font-bold py-2 px-4 rounded transition-all cursor-pointer"
                onClick={() => setGame("play")}
              >
                Start
              </div>
            </div>
          </div>
        ) : null}

        {game === "play" ? <></> : null}

        {game === "end" ? <></> : null}
      </main>
    </>
  );
}
