import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/actions/spinnerComponentAction";
import { userService } from "../../services/userService";

export default function UserPage() {
  let dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(handleStartSpinner());
  //     userService
  //       .getUserInfor()
  //       .then((res) => {
  //         console.log("getUserInfor", res);
  //         dispatch(handleEndSpinner());
  //       })
  //       .catch((err) => {
  //         console.log("getUserInfor", err);
  //         dispatch(handleEndSpinner());
  //       });
  //   }, []);
  useEffect(() => {
    dispatch(handleStartSpinner());
    userService
      .getAccountInfor()
      .then((res) => {
        console.log("getAccountInfor", res.data.content);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log("getAccountInfor", err.response.data.content);
        dispatch(handleEndSpinner());
      });
  }, []);
  return <div className="py-20 min-h-screen">UserPage</div>;
}
