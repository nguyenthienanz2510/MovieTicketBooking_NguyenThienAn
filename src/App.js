import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import SpinnerComponent from "./components/SpinnerComponent/SpinnerComponent";
import { userRoutes } from "./routes/userRoutes";

function App() {
  return (
    <div className="">
      <SpinnerComponent />
      <BrowserRouter>
        <Switch>
          {userRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  // component={route.component}
                  render={() => {
                    return route.component;
                  }}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            }
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
