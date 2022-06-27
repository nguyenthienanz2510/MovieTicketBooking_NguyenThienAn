import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService";
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

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
  let handleLogoin = () => {};
  return (
    <div>
      {userInfor ? (
        <div className="pt-6 md:pt-0 md:px-3 md:ml-auto md:block flex justify-between">
          <span className="font-medium text-xl md:text-lg ">
            {userInfor.hoTen}
          </span>
          <button
            onClick={handleLogout}
            className="px-3 md:py-2 hover:text-primary transition-all"
          >
            <Tooltip placement="bottomRight" title="Log out" color="#ff6500">
              <FontAwesomeIcon
                className="text-xl  md:text-base "
                icon={faArrowRightFromBracket}
              />
            </Tooltip>
          </button>
        </div>
      ) : (
        <div className="px-3">
          <button className="text-xl md:text-sm ml-1 px-5 py-2 rounded border-2 border-primary hover:text-white hover:bg-primary transition-all">
            Đăng ký
          </button>
          <NavLink to={"/login"}>
            <button className="text-xl md:text-sm ml-1 px-5 py-2 rounded border-2 border-primary hover:text-white hover:bg-primary transition-all">
              Đăng nhập
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
