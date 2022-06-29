import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/actions/spinnerComponentAction";
import { userService } from "../../services/userService";

export default function UserPage() {
  let [userInfor, setUserInfo] = useState(null);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleStartSpinner());
    console.log("start spinner");
    userService
      .getAccountInfor()
      .then((res) => {
        console.log("getAccountInfor", res.data.content);
        setUserInfo(res.data.content);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log("getAccountInfor", err.response.data.content);
        dispatch(handleEndSpinner());
      });
  }, []);

  // console.log(!!userInfor);

  const renderTicketBookingList = () => {
    return (
      <div>
        {userInfor.thongTinDatVe.map((item, index) => {
          console.log(item);
          return (
            <>
              <div key={index} className=" my-2">
                <span className="font-medium text-lg text-primary mr-5">
                  PHIM: {item.tenPhim}
                </span>{" "}
                <span>{moment(item.ngayDat).format("lll")}</span>
              </div>
              <div className="flex mb-8">
                <div className="mr-3">Vé đã đặt:</div>
                <ul>
                  {item.danhSachGhe.map((item, index) => {
                    console.log(item);
                    return (
                      <li key={index}>
                        Rạp:{" "}
                        <span className="font-medium">
                          {item.tenHeThongRap}, {item.tenCumRap}
                        </span>
                        , Ghế:{" "}
                        <span className="font-medium">{item.tenGhe}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto pt-28 pb-10 min-h-screen text-white">
      <div className="py-5">
        <h2 className="text-primary text-xl font-medium text-center">
          Thông tin tài khoản:
        </h2>
        <div className="flex py-5 text-base justify-center">
          <ul className="mx-8">
            <li className="my-2">Tài khoản:</li>
            <li className="my-2">Họ tên:</li>
            <li className="my-2">Email:</li>
          </ul>
          {!!userInfor ? (
            <ul className="mx-8">
              <li className="my-2">{userInfor.taiKhoan}</li>
              <li className="my-2">{userInfor.hoTen}</li>
              <li className="my-2">{userInfor.matKhau}</li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="pb-5">
        <h2 className="text-primary text-xl font-medium text-center">
          Lịch sử đặt vé
        </h2>
        <div className="py-5 text-base flex justify-center">
          {!!userInfor ? renderTicketBookingList() : <></>}
        </div>
      </div>
    </div>
  );
}
