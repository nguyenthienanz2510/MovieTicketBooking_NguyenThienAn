import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import TicketList from "./TicketList/TicketList";

export default function BookingTicketPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    movieService
      .getTicketList(id)
      .then((res) => {
        // console.log("booking", res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  let isValid = !!movie.thongTinPhim;
  if (isValid) {
    return (
      <div className="min-h-screen pt-36 pb-20 container mx-auto">
        <div className="grid grid-flow-row grid-cols-12 gap-4 ">
          <div className="col-span-12 lg:col-span-8">
            <div className="w-full h-20 bg-primary flex items-center rounded-3xl mb-10">
              <span className="mx-auto font-medium text-2xl">Màn hình</span>
            </div>
            <div>
              <TicketList danhSachGhe={movie.danhSachGhe} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-color-white rounded-md">
              <h4 className="mt-3 mx-3 text-2xl font-bold text-white">
                {movie.thongTinPhim.tenPhim}
              </h4>
              <ul className="px-3 text-base font-medium">
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Cụm Rạp:</span>
                  <span className="text-secondary">
                    {movie.thongTinPhim.tenCumRap}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Địa chỉ:</span>
                  <span className="text-secondary">
                    {movie.thongTinPhim.diaChi}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Rạp:</span>
                  <span className="text-secondary">
                    {movie.thongTinPhim.tenRap}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Ngày giờ chiếu:</span>
                  <span className="text-secondary">
                    {movie.thongTinPhim.ngayChieu} ~{" "}
                    {movie.thongTinPhim.gioChieu}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Ghế đã chọn:</span>
                  <span></span>
                </li>
              </ul>
              <p className="text-3xl font-bold text-center py-5">
                <span>150000</span> VND
              </p>
              <div className="text-center">
                <button
                  onClick={() => {
                    console.log("Dat ve nao");
                  }}
                  className="my-5 px-10 py-3 border rounded border-primary bg-primary hover:opacity-90 text-xl font-bold"
                >
                  ĐẶT VÉ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
