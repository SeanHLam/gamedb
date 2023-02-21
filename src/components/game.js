import Image from "next/image";
import gameData from "@/data/gameData.json";
import { useState, useEffect } from "react";

export default function Game({ game = 13, score = false, selectGame }) {
  return (
    <div className="game flex flex-col drop-shadow-2xl rounded-lg ">
      <div
        onClick={() => {
          selectGame()
        }}
        className="flex flex-col items-center p-2    justify-center"
      >
        {gameData[game].ImageURL ? (
          <Image
            className="rounded-lg hover:scale-95 transition-all"
            src={gameData[game].ImageURL}
            alt={gameData[game].Name}
            width={300}
            height={300}
            loading="lazy"
          />
        ) : null}
        <h2 className="text-2xl font-bold text-clay-100 text-center p-2">
          {gameData[game].Name} ({gameData[game].Year_of_Release} )
        </h2>
      </div>
    </div>
  );
}
