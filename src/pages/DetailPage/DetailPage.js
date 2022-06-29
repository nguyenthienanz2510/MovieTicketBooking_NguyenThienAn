import { Progress } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/actions/spinnerComponentAction";
import { movieService } from "../../services/movieService";
import DetailMovieSchedule from "./DetailMovieSchedule/DetailMovieSchedule";
import { useDispatch } from "react-redux";

export default function DetailPage() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const [movie, setMovie] = useState({});
  console.log({ id, movie });
  useEffect(() => {
    dispatch(handleStartSpinner());

    movieService
      .getDetailMovie(id)
      .then((res) => {
        console.log("getDetailMovie", res.data.content);
        setMovie(res.data.content);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, [id]);
  return (
    <div className="pt-20 sm:pt-40 pb-12 space-y-10 bg-color-background min-h-screen">
      <div className="container mx-auto ">
        <div className="lg:flex justify-between">
          <div className="flex flex-col sm:flex-row ">
            <img
              src={movie.hinhAnh}
              className="w-full sm:w-1/2 lg:w-96 rounded"
              alt="img"
            />
            <div className="w-full sm:w-1/2 lg:w-1/2 px-2 pt-5 sm:pl-8">
              <p className="text-3xl font-medium">{movie.tenPhim}</p>
              <p className="text-base my-4 text-justify">
                Ngày khởi chiếu:{" "}
                {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
              </p>
              <p className="text-base text-justify">{movie.moTa}</p>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Progress
              format={(number) => {
                return (
                  <span className="text-2xl text-primary">{number} points</span>
                );
              }}
              strokeColor={{
                "0%": "#1890ff",
                "100%": "#ff6500",
              }}
              strokeWidth={10}
              width={160}
              type="circle"
              percent={movie.danhGia * 10}
            />
          </div>
        </div>
        <div className="w-full py-16">
          <iframe
            src={movie.trailer}
            className="mx-auto w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          ></iframe>
        </div>
        <div>
          <DetailMovieSchedule />
        </div>
      </div>
    </div>
  );
}

{
  /* {
    "maPhim": 8807,
    "tenPhim": "The Mitchells vs. the Machine",
    "biDanh": "the-mitchells-vs-the-machine",
    "trailer": "https://www.youtube.com/watch?v=ra8dwFFcumU",
    "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-mitchells-vs-the-machines_gp01.jpg",
    "moTa": "Nhà Mitchell đối đầu với máy móc là một bộ phim phiêu lưu hoạt hình máy tính của Mỹ năm 2021 do Sony Pictures Animation sản xuất và được phân phối bởi Netflix",
    "maNhom": "GP01",
    "hot": true,
    "dangChieu": false,
    "sapChieu": true,
    "ngayKhoiChieu": "2022-05-23T19:49:41.457",
    "danhGia": 10
} */
}
