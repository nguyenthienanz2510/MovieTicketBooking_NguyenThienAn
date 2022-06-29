import MovieBanner from "./MovieBanner/MovieBanner";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieTabs from "./MovieTabs/MovieTabs";
import { Element } from "react-scroll";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div id="MovieBanner-wrapper" className=" mt-20">
        <MovieBanner />
      </div>
      <div id="MovieCarousel-wrapper" className="container mx-auto">
        <Element name="MovieCarousel" className="element">
          <MovieCarousel />
        </Element>
      </div>
      <div id="MovieTabs-wrapper" className="container mx-auto py-20">
        <Element name="MovieTabs" className="element">
          <MovieTabs />
        </Element>
      </div>
    </div>
  );
}
