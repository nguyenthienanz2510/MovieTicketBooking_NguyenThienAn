import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookingTicketService } from "../../services/bookingTicketService";
import { movieService } from "../../services/movieService";
import TicketList from "./TicketList/TicketList";
import { useDispatch } from "react-redux/es/exports";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/actions/spinnerComponentAction";

export default function BookingTicketPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [submitBooking, setSubmitBooking] = useState(false);
  const [ticketBooking, setTicketBooking] = useState({});
  let dispatch = useDispatch();

  // useEffect(() => {
  //   bookingTicketService
  //     .postBookingTicket(ticketBooking)
  //     .then((res) => {
  //       console.log(res);
  //       doneSubmitBooking();
  //       setTicketBooking({});
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       doneSubmitBooking();
  //     });
  // }, [submitBooking]);

  useEffect(() => {
    dispatch(handleStartSpinner());
    movieService
      .getTicketList(id)
      .then((res) => {
        // console.log(res.data.content.danhSachGhe);
        setMovie(res.data.content);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, [id, submitBooking]);

  const onSubmitBooking = () => {
    dispatch(handleStartSpinner());
    setSubmitBooking(true);
    bookingTicketService
      .postBookingTicket(ticketBooking)
      .then((res) => {
        console.log(res);
        setTicketBooking({});
        doneSubmitBooking();
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        doneSubmitBooking();
        dispatch(handleEndSpinner());
      });
  };
  const doneSubmitBooking = () => {
    setSubmitBooking(false);
  };

  const renderTicketList = () => {
    if (!!ticketBooking.danhSachVe) {
      return ticketBooking.danhSachVe.map((item, key) => {
        let index = movie.danhSachGhe.findIndex((ticket) => {
          return ticket.maGhe == item.maGhe;
        });
        // console.log(index);
        return (
          <span
            key={key}
            className="min-w-[96px] px-4 py-2 border-2 border-primary rounded m-2 font-medium text-primary"
          >
            Ghế {movie.danhSachGhe[index].tenGhe}
          </span>
        );
      });
    }
  };

  const renderTotalPrice = () => {
    if (!!ticketBooking.danhSachVe) {
      let totalPrice = ticketBooking.danhSachVe.reduce((total, current) => {
        // console.log(total, current);
        return (total += current.giaVe * 1);
      }, 0);
      return <span>{totalPrice.toLocaleString()}</span>;
    }
    return <span>0</span>;
  };
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
              <TicketList
                danhSachGhe={movie.danhSachGhe}
                submitBooking={submitBooking}
                doneSubmitBooking={doneSubmitBooking}
                ticketBooking={ticketBooking}
                setTicketBooking={setTicketBooking}
              />
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
                  <span className="text-primary">
                    {movie.thongTinPhim.tenCumRap}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Địa chỉ:</span>
                  <span className="text-primary">
                    {movie.thongTinPhim.diaChi}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Rạp:</span>
                  <span className="text-primary">
                    {movie.thongTinPhim.tenRap}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Ngày giờ chiếu:</span>
                  <span className="text-primary">
                    {movie.thongTinPhim.ngayChieu} ~{" "}
                    {movie.thongTinPhim.gioChieu}
                  </span>
                </li>
                <li className="border-b py-3 flex justify-between">
                  <span style={{ minWidth: 100 }}>Ghế đã chọn:</span>
                  <div className="flex flex-wrap justify-end">
                    {renderTicketList()}
                  </div>
                </li>
              </ul>
              <p className="text-3xl font-bold text-center py-5">
                <span>{renderTotalPrice()}</span> VND
              </p>
              <div className="text-center">
                <button
                  onClick={() => {
                    console.log("Dat ve nao");
                    onSubmitBooking();
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
