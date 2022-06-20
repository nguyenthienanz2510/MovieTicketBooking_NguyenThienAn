import { Progress } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log({ id, movie });
  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="pt-40 pb-12 space-y-10 bg-color-background min-h-screen">
      <div className="container mx-auto ">
        <div className="lg:flex justify-between">
          <div className="flex">
            <img
              src={movie.hinhAnh}
              className="w-1/2 lg:w-96 rounded"
              alt="img"
            />
            <div className="w-1/2 lg:w-1/2 pl-8">
              <p className="text-3xl font-medium">{movie.tenPhim}</p>
              <p className="text-base my-4">
                Ngày khởi chiếu:{" "}
                {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
              </p>
              <p className="text-base">{movie.moTa}</p>
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
        <div className="w-full h-auto py-20">
          <iframe
            className="mx-auto"
            width="90%"
            height="500px"
            src={movie.trailer}
          ></iframe>
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
