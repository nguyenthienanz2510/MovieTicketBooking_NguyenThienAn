import { useState } from "react";
import { useEffect } from "react";
import { movieService } from "../../../services/movieService";
import { Carousel } from "antd";
import "./MovieBanner.scss";

export default function MovieBanner() {
  const [BannerList, setBannerList] = useState([]);
  useEffect(() => {
    let FetchMovieBanner = async () => {
      try {
        let result = await movieService.getBannerList();
        console.log(result.data.content);
        setBannerList(result.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    FetchMovieBanner();
  }, []);

  return (
    <div id="MovieBanner">
      <Carousel autoplay>
        {BannerList.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.hinhAnh} alt="img" className="w-full" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
