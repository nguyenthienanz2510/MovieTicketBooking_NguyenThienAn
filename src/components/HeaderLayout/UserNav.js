import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService";

export default function UserNav() {
  let userInfor = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  // console.log(userInfor);
  // let dispatch = useDispatch();
  let handleLogout = () => {
    localStorageService.removeUserInfor();
    window.location.href = "/login";
  };
  return (
    <div>
      {userInfor ? (
        <div className="px-3">
          <span className="font-medium text-base ">{userInfor.hoTen}</span>
          <button
            onClick={handleLogout}
            className=" px-2 py-2 hover:text-primary transition-all"
          >
            <FontAwesomeIcon
              className="text-base"
              icon={faArrowRightFromBracket}
            />
          </button>
        </div>
      ) : (
        <div className="px-3">
          <button className="ml-1 px-5 py-2 rounded border-2 border-primary hover:text-white hover:bg-primary transition-all">
            Đăng ký
          </button>
          <button className="ml-1 px-5 py-2 rounded border-2 border-primary hover:text-white hover:bg-primary transition-all">
            Đăng nhập
          </button>
        </div>
      )}
    </div>
  );
}
