import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bookingTicketService } from "../../../services/bookingTicketService";
import "./TicketList.scss";

export default function TicketList({
  danhSachGhe,
  submitBooking,
  doneSubmitBooking,
}) {
  // console.log(danhSachGhe);
  console.log(submitBooking);

  let { id } = useParams();

  const [ticketSelecting, setticketSelecting] = useState({});
  const [ticketBooking, setTicketBooking] = useState({
    // maLichChieu: 0,
    // danhSachVe: [
    //   {
    //     maGhe: 0,
    //     giaVe: 0,
    //   },
    // ],
  });

  useEffect(() => {
    // console.log("update");
    bookingTicketService
      .postBookingTicket(ticketBooking)
      .then((res) => {
        console.log(res);
        doneSubmitBooking();
      })
      .catch((err) => {
        console.log(err);
        doneSubmitBooking();
      });
  }, [submitBooking]);

  const bookingTicket = (item) => {
    if (!!ticketBooking.danhSachVe) {
      setTicketBooking({
        maLichChieu: id,
        danhSachVe: [
          ...ticketBooking.danhSachVe,
          {
            maGhe: item.maGhe,
            giaVe: item.giaVe,
          },
        ],
      });
    } else {
      setTicketBooking({
        maLichChieu: id,
        danhSachVe: [
          {
            maGhe: item.maGhe,
            giaVe: item.giaVe,
          },
        ],
      });
    }
  };
  // console.log(!!ticketBooking.danhSachVe);
  console.log(ticketBooking);

  const renderTheoLoaiGhe = (item) => {
    // console.log(item.loaiGhe);
    if (item.loaiGhe === "Vip") {
      return (
        <button
          onClick={() => {
            bookingTicket(item);
          }}
          className="TicketBtn bg-yellow-500"
        >
          {item.stt}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            bookingTicket(item);
          }}
          className="TicketBtn"
        >
          {item.stt}
        </button>
      );
    }
  };
  return (
    <div className="w-full">
      <div>
        {danhSachGhe.map((item, index) => {
          return (
            <div className="TicketItem" key={index}>
              {item.daDat ? (
                <button className="TicketBtn disabled bg-gray-400 ">X</button>
              ) : (
                renderTheoLoaiGhe(item)
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <div className="TicketItem  my-5 w-28 flex content-center items-center flex-col">
          <button className="TicketBtn disabled"></button>
          <p className="text-center">Ghế Thường</p>
        </div>
        <div className="TicketItem  my-5 w-28 flex content-center items-center flex-col">
          <button className="TicketBtn disabled bg-yellow-400 "></button>
          <p className="text-center">Ghế VIP</p>
        </div>
        <div className="TicketItem my-5 w-28 flex content-center items-center flex-col">
          <button className="TicketBtn disabled bg-gray-400 ">X</button>
          <p className="text-center">Ghế đã đặt</p>
        </div>
        <div className="TicketItem my-5 w-28 flex content-center items-center flex-col">
          <button className="TicketBtn disabled bg-primary "></button>
          <p className="text-center">Ghế đang chọn</p>
        </div>
      </div>
    </div>
  );
}
