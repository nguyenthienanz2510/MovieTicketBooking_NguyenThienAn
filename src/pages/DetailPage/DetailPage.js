import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(id);
  useEffect(() => {
    console.log(id);

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
    <div className="container mx-auto py-10 space-y-10">
      <div className="flex">
        <img src={movie.hinhAnh} className="w-96 rounded" alt="img" />
        <Progress
          format={(number) => {
            return <span className="text-blue-800">{number} points</span>;
          }}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d086",
          }}
          strokeWidth={10}
          width={200}
          type="circle"
          percent={movie.danhGia * 10}
        />
      </div>
      <p>{movie.tenPhim}</p>
      <p>{movie.moTa}</p>
    </div>
  );
}
