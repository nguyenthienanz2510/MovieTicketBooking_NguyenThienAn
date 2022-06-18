import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService";

export default function UserNav() {
  let userInfor = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  console.log(userInfor);
  // let dispatch = useDispatch();
  let handleLogout = () => {
    localStorageService.removeUserInfor();
    window.location.href = "/login";
  };
  return (
    <div>
      {userInfor ? (
        <div>
          <span>{userInfor.hoTen}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded border-2 border-blue-500"
          >
            Dang Xuat
          </button>
        </div>
      ) : (
        <div>
          <button className="px-4 py-2 rounded border-2 border-blue-500">
            Dang Ky
          </button>
          <button className="px-4 py-2 rounded border-2 border-blue-500">
            Dang Nhap
          </button>
        </div>
      )}
    </div>
  );
}
