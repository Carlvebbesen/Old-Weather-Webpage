import React, { useState } from "react";

export const DestinationContext = React.createContext({
  address: "",
  geocode: {
    lat: "",
    long: "",
  },
});

const LocationContext = (props) => {
  const [location, setLocation] = useState("");
  const [activeNavBar, setActiveNavBar] = useState("/");

  return (
    <DestinationContext.Provider
      value={{
        pickedLocation: location,
        setLocation,
        activeElement: activeNavBar,
        setActiveNavBar,
      }}
    >
      {props.children}
    </DestinationContext.Provider>
  );
};
export default LocationContext;
