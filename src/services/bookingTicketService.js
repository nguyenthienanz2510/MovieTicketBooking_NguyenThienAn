import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
import { localStorageService } from "./localStorageService";

export const bookingTicketService = {
  postBookingTicket: (data) => {
    return axios.post(`${BASE_URL}/api/QuanLyDatVe/DatVe`, data, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfor()?.accessToken,
      },
    });
  },
};
