import Image from "next/image";
import gameData from "@/data/gameData.json";
import { useState, useEffect } from "react";

export default function Card({ game = 13, heart=true, sendID, title, description, link }) {

  const [fave, setFave] = useState("#ebecf3");

  const makeFave = () => {
    if (fave === "#ebecf3") {
      setFave("#f9a8d4");
    } else {
      setFave("#ebecf3");
    }
    sendID(game);
    
  };




  return (
    <div className="flex flex-col drop-shadow-2xl   justify-between w-60 h-60 bg-clay-200 rounded-lg transition-all hover:scale-95">
      <div className="flex items-center p-2 w-full -z-10 relative  justify-center">
        
        {
          gameData[game].ImageURL ?
          <Image
          className="rounded-lg fixed  -z-10"
          src={gameData[game].ImageURL}
          alt={gameData[game].Name}
          fill="true"
          sizes="100%"
          loading="lazy"
        />
        :
        null

        }
        
      
      </div>
      {
          heart ?
          <div
        onClick={() => {
          makeFave();
        }}
       className=" m-2 p-1 flex justify-center items-center bg-clay-800 w-min rounded-full   hover:scale-95 transition-all">
        
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={fave}
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </div>
      : 
      null

      }
      
    </div>
  );
}
