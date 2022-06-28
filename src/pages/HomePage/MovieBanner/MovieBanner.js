import { useState } from "react";
import { useEffect } from "react";
import { movieService } from "../../../services/movieService";
import { Carousel } from "antd";
import "./MovieBanner.scss";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/actions/spinnerComponentAction";

export default function MovieBanner() {
  const [BannerList, setBannerList] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleStartSpinner);
    let FetchMovieBanner = async () => {
      try {
        let result = await movieService.getBannerList();
        // console.log(result.data.content);
        setBannerList(result.data.content);
        dispatch(handleEndSpinner);
      } catch (error) {
        console.log(error);
        dispatch(handleEndSpinner);
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
