import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import gameData from "@/data/gameData.json";
import { useState, useEffect } from "react";

const Carousel = ({
  sendID,
  title = "Published by Nintendo",
  filterType = "Publisher",
  filterValue = "Nintendo",
  heart=true,
  
}) => {
  const [faveID, setFaveID] = useState("");

  const getFaveID = (id) => {
    setFaveID(id);
    sendID(id);
  };



  const settings = {
    touchThreshold: 10,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    shouldRender: (slideIndex) => {
      const slide = items[slideIndex];
      return !slide.className || !slide.className.includes("skip-slide");
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },

        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const filteredGames = [];

  for (let index = 0; index < gameData.length; index++) {
    if (gameData[index][filterType] === filterValue) {
      filteredGames.push(gameData[index]);
    }
  }

  return (
    <div className=" mb-8 ">
      <h2 className="pl-2 text-3xl pb-2 text-clay-100 bold">{title}</h2>
      <Slider {...settings}>
        {filteredGames.map((game, index) => (
          <>
            
            <Card 
            heart={true}
            onClick={ () => {
              newFave(faveID);
            }}
            sendID={getFaveID} key={game.ID} game={game.ID} />
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
