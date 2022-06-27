import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MovieTabItem({ movie }) {
  // console.log("movie", movie);
  return (
    <div
      style={{ minHeight: 180 }}
      className="lg:flex py-6 sm:px-5 sm:py-6 lg:space-x-5 border-b border-gray-300 mr-5"
    >
      {/* <div className=""> */}
      <img
        className="lg:w-40 object-top object-contain rounded"
        src={movie.hinhAnh}
        alt="img"
      />
      {/* </div> */}
      <div>
        <p className="font-medium text-lg mt-2">{movie.tenPhim}</p>
        <div>
          {movie.lstLichChieuTheoPhim.map((item, index) => {
            // if (index < 6) {
            return (
              <NavLink key={index} to={`booking/${item.maLichChieu}`}>
                <button
                  onClick={() => {
                    console.log("Dat ve nao ", item);
                  }}
                  className="sm:min-w-[188px] w-full lg:w-auto mt-3 sm:mr-3 px-1 sm:px-5 py-2 border border-primary rounded hover:bg-primary hover:text-white"
                >
                  {moment(item.ngayChieuGioChieu).format("lll")}
                </button>
              </NavLink>
            );
            // }
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

// {
//   "cumRapChieu": [
//       {
//           "lichChieuPhim": [
//               {
//                   "maLichChieu": "43016",
//                   "maRap": "506",
//                   "tenRap": "Rạp 6",
//                   "ngayChieuGioChieu": "2021-05-04T01:23:17",
//                   "giaVe": 75000,
//                   "thoiLuong": 120
//               }
//           ],
//           "maCumRap": "bhd-star-cineplex-vincom-thao-dien",
//           "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
//           "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
//           "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2"
//       }
//   ],
//   "maHeThongRap": "BHDStar",
//   "tenHeThongRap": "BHD Star Cineplex",
//   "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
// }
