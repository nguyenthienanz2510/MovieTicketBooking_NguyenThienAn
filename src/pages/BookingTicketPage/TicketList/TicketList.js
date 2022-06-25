import { useState } from "react";
import "./TicketList.scss";

export default function TicketList({ danhSachGhe }) {
  console.log(danhSachGhe);
  const [ticketSelecting, setticketSelecting] = useState({});
  const renderTheoLoaiGhe = (item) => {
    // console.log(item.loaiGhe);
    if (item.loaiGhe === "Vip") {
      return <button className="TicketBtn bg-yellow-500">{item.stt}</button>;
    } else {
      return <button className="TicketBtn">{item.stt}</button>;
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
