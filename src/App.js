import "./App.css";
import Search from "./Components/Search/Search";
import WeatherPage from "./Pages/WeatherPage";
import SkiSenterPage from "./Pages/SkiSenterPage";
import VarsomPage from "./Pages/VarsomPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { useContext } from "react";
import { DestinationContext } from "./Context/LocationContext";

function App() {
  const locationContext = useContext(DestinationContext);

  const setLocationHandler = (locationObject) => {
    locationContext.setLocation(locationObject);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Search destinationHandler={(location) => setLocationHandler(location)} />
      <Switch>
        <Route path={"/"} exact component={WeatherPage} />
        <Route path={"/SkiSenter"} exact component={SkiSenterPage} />
        <Route path={"/Avalanche"} exact component={VarsomPage} />
        <Redirect to={"/"} />
      </Switch>
      <NavBar />
    </div>
  );
}
export default App;
