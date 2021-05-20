import React, { useContext, useEffect } from "react";
import styles from "../../modules/NavBar.module.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MountainIcon from "@material-ui/icons/FilterHdrTwoTone";
import WeatherIcon from "@material-ui/icons/AcUnitTwoTone";
import skisenter from "../../Assets/skisenter.png";
import { DestinationContext } from "../../Context/LocationContext";
import { useHistory } from "react-router-dom";

export default function LabelBottomNavigation() {
  const activeValueContext = useContext(DestinationContext);
  let history = useHistory();

  useEffect(() => {
    if (window.location.pathname !== activeValueContext.activeElement) {
      activeValueContext.setActiveNavBar(window.location.pathname);
    }
  });

  const handleChange = (event, newValue) => {
    activeValueContext.setActiveNavBar(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={activeValueContext.activeElement}
      onChange={handleChange}
      className={styles.NavBar}
    >
      <BottomNavigationAction
        label="Værdata"
        value="/"
        icon={<WeatherIcon />}
      />
      <BottomNavigationAction
        label="Skisenter"
        value="/SkiSenter"
        icon={
          <img src={skisenter} alt="SkiSenter" height="36px" width="45px" />
        }
      />
      <BottomNavigationAction
        label="Snøskred"
        value="/avalanche"
        icon={<MountainIcon />}
      />
    </BottomNavigation>
  );
}
