import { combineReducers } from "redux";
import { bookingTicketReducer } from "./bookingTicketReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  bookingTicketReducer: bookingTicketReducer,
});
