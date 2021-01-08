import React, { useState } from "react";

export const DestinationContext   = React.createContext({
    address: "",
    geocode: {
      lat: "",
      long: ""
    },
    location: () => {}
  });

const LocationContext = props => {
  const [location, setLocation] = useState("");

  const locationHandler = (LocationObject) =>{
      setLocation(LocationObject);
  }
  return(
    <DestinationContext.Provider
     value={location}>
      {props.children}
    </DestinationContext.Provider>
  )
}
export default LocationContext;