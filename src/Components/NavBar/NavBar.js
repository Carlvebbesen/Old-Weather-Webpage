import React from 'react';
import "./NavBar.css"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import MountainIcon from '@material-ui/icons/FilterHdrTwoTone';
import WeatherIcon from '@material-ui/icons/AcUnitTwoTone';
import { useHistory } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('/');
  let history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue)

  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={"NavBar"}>
      <BottomNavigationAction label="Søk" value="/" icon={<SearchIcon />} />
      <BottomNavigationAction label="Værdata" value="/WeatherData" icon={<WeatherIcon />} />
      <BottomNavigationAction label="Skisenter" value="/SkiSenter" icon={<WeatherIcon />} />
      <BottomNavigationAction label="Snøskred" value="/avalanche" icon={<MountainIcon />} />
    </BottomNavigation>
  );
}