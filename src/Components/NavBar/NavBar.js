import React, { useContext } from 'react';
import "./NavBar.css"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import MountainIcon from '@material-ui/icons/FilterHdrTwoTone';
import WeatherIcon from '@material-ui/icons/AcUnitTwoTone';
import skisenter from "../../Assets/skisenter.png"
import { DestinationContext } from '../../Context/LocationContext';
import { useHistory } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const activeValueContext = useContext(DestinationContext)
  let history = useHistory();

  const handleChange = (event, newValue) => {
    activeValueContext.setActiveNavBar(newValue)
    history.push(newValue)
  };


  return (
    <BottomNavigation value={activeValueContext.activeElement} onChange={handleChange} className={"NavBar"}>
      <BottomNavigationAction label="Søk" value="/" icon={<SearchIcon />} />
      <BottomNavigationAction label="Værdata" value="/WeatherData" icon={<WeatherIcon />} />
      <BottomNavigationAction label="Skisenter" value="/SkiSenter" icon={<img src={skisenter} alt="SkiSenter" height="36px" width="45px" />} />
      <BottomNavigationAction label="Snøskred" value="/avalanche" icon={<MountainIcon />} />
    </BottomNavigation>
  );
}