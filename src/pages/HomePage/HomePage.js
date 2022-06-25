import MovieBanner from "./MovieBanner/MovieBanner";
import MovieCarousel from "./MovieCarousel/MovieCarousel";
import MovieTabs from "./MovieTabs/MovieTabs";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div id="MovieBanner-wrapper" className=" mt-20">
        <MovieBanner />
      </div>
      <div id="MovieCarousel-wrapper" className="container mx-auto">
        <MovieCarousel />
      </div>
      <div id="MovieTabs-wrapper" className="container mx-auto py-20">
        <MovieTabs />
      </div>
    </div>
  );
}
