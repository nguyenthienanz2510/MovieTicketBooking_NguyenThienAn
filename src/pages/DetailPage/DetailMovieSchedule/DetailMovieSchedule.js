import { Tabs } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movieService } from "../../../services/movieService";
const { TabPane } = Tabs;

export default function DetailMovieSchedule() {
  let { id } = useParams();
  const [movieSchedule, setMovieSchedule] = useState(null);
  useEffect(() => {
    movieService
      .getDetailMovieSchedule(id)
      .then((res) => {
        console.log("getDetailMovieSchedule", res.data.content);
        setMovieSchedule(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(movieSchedule);
  let renderContent = () => {
    return movieSchedule.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" />}
          key={index}
        >
          <Tabs style={{ height: 680 }} tabPosition="left" defaultActiveKey="1">
            {heThongRap.cumRapChieu.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-40 md:w-56 lg:w-96 whitespace-normal">
                      <p className="text-lg  text-left">{cumRap.tenCumRap}</p>
                      <p className="text-left">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div
                    style={{
                      height: 680,
                      overflowY: "scroll",
                      paddingRight: 20,
                    }}
                  >
                    {cumRap.lichChieuPhim.map((item, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={`/booking/${item.maLichChieu}`}
                        >
                          <button
                            style={{ minWidth: 188 }}
                            onClick={() => {
                              console.log("Dat ve nao ", item);
                            }}
                            className="w-full lg:w-auto m-2 px-5 py-2 border border-primary rounded hover:bg-primary"
                          >
                            {moment(item.ngayChieuGioChieu).format("lll")}
                          </button>
                        </NavLink>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  const onChange = (key) => {
    console.log("[movieSchedulekey]", key);
  };
  return (
    <Tabs
      id="MovieTabs"
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
    >
      {!!movieSchedule ? renderContent() : null}
    </Tabs>
  );
}
