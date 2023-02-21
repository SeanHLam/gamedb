import Head from "next/head";
import Image from "next/image";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import NavBar from "@/components/navbar";
import FaveCarousel from "@/components/faveCarousel";
import { useState, useEffect } from "react";

export default function Home() {
  const [faves, setFaves] = useState([]);
  

  const addFave = (game) => {
    setFaves([...faves, game]);
    
  };
  

  
  return (
    <>
      <Head>
        <title>GAME HoL</title>
        <meta name="description" content="Guess which game has the higher metacritic score" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main >
       
       <NavBar></NavBar>
      
        <div className="flex mb-8 mt-8 flex-col ">
          <FaveCarousel
          faves={faves}
          heart={false}
          />
          
        
          <Carousel
            sendID={addFave}
          />
          <Carousel
          filterType="Genre"
          filterValue="Role-Playing"
          title="Role-Playing Games"
          sendID={addFave}
          />
          <Carousel
          filterType="Genre"
          filterValue="Sports"
          title="Sports Games"
          sendID={addFave}
          />
          <Carousel
          filterType="Publisher"
          filterValue="Sony Computer Entertainment"
          title="Published by Sony"
          sendID={addFave}
          /> 
          <Carousel
          filterType="Platform"
          filterValue="PS4"
          title="Games on the PS4"
          sendID={addFave}
          /> 
          <Carousel
          filterType="Publisher"
          filterValue="Microsoft Game Studios"
          title="Published by Microsoft"
          sendID={addFave}
          /> 
          <Carousel
          filterType="Genre"
          filterValue="Shooter"
          title="Shooter Games"
          sendID={addFave}
          />
         
        </div>
    
        
      </main>
    </>
  );
}
