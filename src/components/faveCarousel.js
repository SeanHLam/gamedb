import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import gameData from "@/data/gameData.json";

const FaveCarousel = ({
 faves = [],
}) => {
  

  const settings = {
    touchThreshold: 10,
    centerMode: false,
    dots: false,
    infinite: false,
   
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
         
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },

        breakpoint: 600,
        settings: {
          
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  

  return (
    <div id="faves" className=" mb-8 ">
      <h2 className="pl-2 text-3xl pb-2 text-clay-100 bold">Favourites</h2>


      {faves.length === 0 ? 

        <div className="h-60">
          <p className="p-4 text-xl text-clay-100 bold">
            You have no favourites yet. 
            Click the heart icon on a game to add it!
          </p>
        </div>
        
       : 
        <Slider className="" {...settings}>
        {faves.map((game, index) => (
          <>
            <Card heart={false} key={index} game={game} />
          </>
        ))}
      </Slider>
      
      }

     
    </div>
  );
};

export default FaveCarousel;
