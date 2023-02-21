import Head from "next/head";
import Image from "next/image";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import NavBar from "@/components/navbar";
import Game from "@/components/game";
import { useState, useEffect } from "react";
import gameData from "../data/gameData.json";

export default function Home() {
  const [game, setGame] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [leftGame, setLeftGame] = useState(0);
  const [rightGame, setRightGame] = useState(0);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  const filteredGames = gameData.filter((obj) =>
    obj.hasOwnProperty("Critic_Score")
  );

  const randomGame = () => {
    setGame("play");
    const randomLeft = Math.floor(Math.random() * 141);
    const randomRight = Math.floor(Math.random() * 141);
    setLeftGame(filteredGames[randomLeft].ID);
    setRightGame(filteredGames[randomRight].ID);
    setLeftScore(filteredGames[randomLeft].Critic_Score);
    setRightScore(filteredGames[randomRight].Critic_Score);
    if (game === "end") {
      setScore(0);
    }
  };

  const selectLeft = () => {
    if (leftScore > rightScore) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      randomGame();
    } else {
      setGame("end");
    }
  };

  const selectRight = () => {
    if (rightScore > leftScore) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      randomGame();
    } else {
      setGame("end");
    }
  };

  useEffect(() => {
    if (game === "end") {
      setScore(0);
    }
  }, []);

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
      <main className="h-screen">
        <NavBar></NavBar>

        {game === "start" ? (
          <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="high-score text-4xl p-3 font-bold text-clay-100 text-center ">
              High Score: {highScore}
            </h2>
            <h2 className="start-text text-4xl font-bold text-clay-100 text-center p-4">
              Guess which game has the higher metacritic score
            </h2>
            <div className="flex justify-center">
              <div
                className="start bg-clay-700 text-2xl hover:bg-clay-800 text-clay-100 hover:text-clay-200 font-bold py-2 px-4 rounded transition-all cursor-pointer"
                onClick={randomGame}
              >
                Start
              </div>
            </div>
          </div>
        ) : null}

        {game === "play" ? (
          <>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <h2 className="score text-4xl p-3 font-bold text-clay-100 text-center">
                  Score: {score}
                </h2>
                <h2 className="high-score text-4xl p-3 font-bold text-clay-100 text-center ">
                  High Score: {highScore}
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="gameCont flex flex-col md:flex-row justify-center items-center">
                <div className="flex justify-center">
                  <Game game={leftGame} selectGame={selectLeft}></Game>
                </div>
                <div className="flex justify-center">
                  <Game game={rightGame} selectGame={selectRight}></Game>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {game === "end" ? (
          <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="game-over text-4xl font-bold text-clay-100 text-center p-2">
              Game Over!
            </h2>
            <div className="flex justify-center items-center p-2">
              <h2 className="text-4xl p-3 font-bold text-clay-100 text-center">
                Score: {score}
              </h2>
              <h2 className="high-score text-4xl p-3 font-bold text-clay-100 text-center ">
                High Score: {highScore}
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <div
                id="play-again"
                className=" bg-clay-700 text-2xl hover:bg-clay-800 text-clay-100 hover:text-clay-200 font-bold py-2 px-4 rounded transition-all cursor-pointer"
                onClick={randomGame}
              >
                Play Again
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
