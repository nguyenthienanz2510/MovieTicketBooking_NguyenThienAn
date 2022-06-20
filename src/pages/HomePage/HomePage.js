import _ from "lodash";
import React, { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieTabs from "./MovieTabs/MovieTabs";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    let fetchMovieList = async () => {
      let result = await movieService.getMovieList();
      let chunkList = _.chunk(result.data.content, 8);
      setMovieList(chunkList);
    };
    fetchMovieList();
  }, []);

  return (
    <div className="min-h-screen">
      <div id="MovieCarousel-wrapper" className="container mx-auto">
        <MovieCarousel chunkedList={movieList} />
      </div>
      <div id="MovieTabs-wrapper" className="container mx-auto py-20">
        <MovieTabs />
      </div>
    </div>
  );
}
