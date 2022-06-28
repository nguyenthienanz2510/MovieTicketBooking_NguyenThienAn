import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../../redux/actions/spinnerComponentAction";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";
import "./MovieTabs.scss";

const { TabPane } = Tabs;

export default function MovieTabs() {
  const [dataRaw, setDataRaw] = useState([]);

  let dispatch = useDispatch();

  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    dispatch(handleStartSpinner());

    movieService
      .getMovieByTheater()
      .then((res) => {
        // console.log(res);
        setDataRaw(res.data.content);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  }, []);
  // console.log(dataRaw);
  let renderContent = () => {
    return dataRaw.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" />}
          key={index}
        >
          <Tabs style={{ height: 680 }} tabPosition="left" defaultActiveKey="1">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-28 sm:w-40 md:w-56 lg:w-96 whitespace-normal">
                      <p className="text-lg  text-left">{cumRap.tenCumRap}</p>
                      <p className="text-left">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 680, overflowY: "scroll" }}>
                    {cumRap.danhSachPhim.map((movie, index) => {
                      // if (index < 20) {
                      return <MovieTabItem key={index} movie={movie} />;
                      // }
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
  return (
    <Tabs
      id="MovieTabs"
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
    >
      {renderContent()}
    </Tabs>
  );
}
