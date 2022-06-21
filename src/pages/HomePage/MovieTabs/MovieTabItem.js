import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MovieTabItem({ movie }) {
  // console.log("movie", movie);
  return (
    <div
      style={{ minHeight: 180 }}
      className="lg:flex p-5 lg:space-x-5 border-b border-gray-300 mr-5"
    >
      <img className="lg:w-24 object-contain" src={movie.hinhAnh} alt="img" />
      <div>
        <p className="font-medium text-lg mt-2">{movie.tenPhim}</p>
        <div>
          {movie.lstLichChieuTheoPhim.map((item, index) => {
            if (index < 6) {
              return (
                <NavLink key={index} to={`booking/${item.maLichChieu}`}>
                  <button
                    style={{ minWidth: 188 }}
                    onClick={() => {
                      console.log("Dat ve nao ", item.ngayChieuGioChieu);
                    }}
                    className="w-full lg:w-auto mt-3 mr-3 px-5 py-2 border border-primary rounded hover:bg-primary"
                  >
                    {moment(item.ngayChieuGioChieu).format("lll")}
                  </button>
                </NavLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

// {
//   "maLichChieu": 16909,
//   "maRap": "482",
//   "tenRap": "Rạp 2",
//   "ngayChieuGioChieu": "2019-01-01T10:10:00",
//   "giaVe": 75000
// }
