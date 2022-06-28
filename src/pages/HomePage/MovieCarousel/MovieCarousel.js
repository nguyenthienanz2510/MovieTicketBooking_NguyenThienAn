import { Carousel } from "antd";
import MovieItem from "./MovieItem/MovieItem";
import "./MovieCarousel.scss";
import _ from "lodash";
import { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/actions/spinnerComponentAction";

const MovieCarousel = () => {
  let dispatch = useDispatch();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    dispatch(handleStartSpinner());
    let fetchMovieList = async () => {
      let result = await movieService.getMovieList();
      // console.log(result);
      let chunkList = _.chunk(result.data.content, 8);
      setMovieList(chunkList);
    };
    fetchMovieList();
    dispatch(handleEndSpinner());
  }, []);

  return (
    <div id="MovieCarousel">
      <Carousel afterChange={onChange}>
        {movieList.map((movies, index) => {
          return (
            <div key={index} className="h-max w-full py-16">
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
