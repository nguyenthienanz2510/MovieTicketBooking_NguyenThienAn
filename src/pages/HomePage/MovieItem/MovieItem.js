import { Card } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

const MovieItem = ({ movie }) => {
  //   console.log(movie);
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta
        title={movie.tenPhim}
        description={
          <span className="text-blue-600">
            {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
          </span>
        }
      />
      <NavLink
        to={`detail/${movie.maPhim}`}
        className="bg-green-600 rounded px-5 py-2 inline-block mt-5 hover:text-white"
      >
        Xem chi tiết
      </NavLink>
    </Card>
  );
};

export default MovieItem;

// {
//     "maPhim": 8843,
//     "tenPhim": "The Batman 1",
//     "biDanh": "the-batman-1",
//     "trailer": "https://youtu.be/a8oWMQzXYWA",
//     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-batman_gp01.jpg",
//     "moTa": "Do Matt Reeves làm đạo diễn, đây được dự đoán là phần phim đen tối chưa từng có về Người Dơi.  Tay giết người hàng loạt – The Ridder (Paul Dano) sẽ là kẻ thù nguy hiểm hàng đầu của Batman ở phần phim sắp tới. Tên xấu xa này bị cảnh sát James Gordon và đồng đội bắt giữ đã lâu. Thế nhưng, hóa ra việc nhốt gã sau song sắt chỉ khiến The Ridder phiền phức hơn với Đấng. Penguin (Colin Farrell) thể hiện là kẻ thủ ác thích trực tiếp tạo ra hỗn loạn, muốn đối đầu Batman hơn là chỉ đạo gián tiếp theo cách The Ridder thực hiện. Đặc biệt, phần này sẽ tập trung khá nhiều vào mối quan hệ của Batman và Catwoman (Zoë Kravitz). Nàng Mèo xuất hiện rất nhiều trong trailer. giữa cô và Batman dường như có sự đồng cảm sâu sắc.",
//     "maNhom": "GP01",
//     "ngayKhoiChieu": "2022-05-23T19:14:56.4",
//     "danhGia": 8,
//     "hot": true,
//     "dangChieu": false,
//     "sapChieu": true
// }
