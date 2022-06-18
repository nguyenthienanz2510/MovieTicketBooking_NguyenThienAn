import { Tabs } from "antd";
import { info } from "autoprefixer";
import { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function MovieTabs() {
  const [dataRaw, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        console.log(res);
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderContent = () => {
    return dataRaw.map((heThongRap, index) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" />}
          key={index}
        >
          <Tabs tabPosition="left" defaultActiveKey="1">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-60 whitespace-normal">
                      <p className="text-lg text-blue-800 text-left">
                        {cumRap.tenCumRap}
                      </p>
                      <p className="text-left">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 500, overflow: "scroll" }}>
                    {cumRap.danhSachPhim.map((movie, index) => {
                      if (index < 20) {
                        return <MovieTabItem key={index} movie={movie} />;
                      }
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
    <Tabs tabPosition="left" defaultActiveKey="1" onChange={onChange}>
      {/* <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane> */}
      {renderContent()}
    </Tabs>
  );
}
