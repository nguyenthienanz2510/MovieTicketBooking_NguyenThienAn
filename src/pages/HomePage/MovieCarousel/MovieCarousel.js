import { Carousel } from "antd";
import MovieItem from "../MovieItem/MovieItem";

const MovieCarousel = ({ chunkedList }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {chunkedList.map((movies, index) => {
        return (
          <div key={index} className="h-max w-full py-20">
            <div className="grid grid-cols-4 gap-10">
              {movies.map((item, index) => {
                return <MovieItem key={index} movie={item} />;
              })}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
