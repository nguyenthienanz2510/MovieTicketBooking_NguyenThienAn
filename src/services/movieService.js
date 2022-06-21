import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieByTheater: () => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getDetailMovie: (maPhim) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getTicketList: (maLichChieu) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
};
