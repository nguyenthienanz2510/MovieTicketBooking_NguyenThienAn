import { BOOKING_TICKET } from "../constants/constants";

let initialState = {
  bookingTicket: null,
};

export const bookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_TICKET: {
      state.userInfor = action.payload;
    }
    default:
      return state;
  }
};
