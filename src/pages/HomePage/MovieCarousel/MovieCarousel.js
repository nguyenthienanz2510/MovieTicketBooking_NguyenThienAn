import { Carousel } from "antd";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieCarousel.scss";

const MovieCarousel = ({ chunkedList }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div id="MovieCarousel">
      <Carousel afterChange={onChange}>
        {chunkedList.map((movies, index) => {
          return (
            <div key={index} className="h-max w-full py-16 mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {movies.map((item, index) => {
                  return <MovieItem key={index} movie={item} />;
                })}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
