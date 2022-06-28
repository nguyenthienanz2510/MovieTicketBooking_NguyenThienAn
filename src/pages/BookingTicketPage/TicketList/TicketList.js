import { useParams } from "react-router-dom";
import "./TicketList.scss";

export default function TicketList({
  danhSachGhe,
  ticketBooking,
  setTicketBooking,
}) {
  let { id } = useParams();

  const bookingTicket = (event, item) => {
    // console.log(event.target);
    if (
      event.target.classList == "TicketBtn" ||
      event.target.classList == "TicketBtn bg-yellow-500"
    ) {
      event.target.classList.add("bg-orange-500");
    } else {
      event.target.classList.remove("bg-orange-500");
    }
    if (!!ticketBooking.danhSachVe) {
      let index = ticketBooking.danhSachVe.findIndex((ticket) => {
        return ticket.maGhe === item.maGhe;
      });
      // console.log(index);

      if (index === -1) {
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
        let cloneDanhSachVe = [...ticketBooking.danhSachVe];
        cloneDanhSachVe.splice(index, 1);
        setTicketBooking({
          maLichChieu: id,
          danhSachVe: cloneDanhSachVe,
        });
      }
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
  // console.log(ticketBooking);

  const renderTheoLoaiGhe = (item) => {
    // console.log(item.loaiGhe);
    if (item.loaiGhe === "Vip") {
      return (
        <button
          onClick={(event) => {
            bookingTicket(event, item);
          }}
          className="TicketBtn bg-yellow-500"
        >
          {item.stt}
        </button>
      );
    } else {
      return (
        <button
          onClick={(event) => {
            bookingTicket(event, item);
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
