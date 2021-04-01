import axios from "axios";
import React, { useCallback, useContext, useEffect } from "react";
import { DestinationContext } from "../Context/LocationContext";


const WeatherPage = () => {
  const globalLocation = useContext(DestinationContext);

  const getAccessToken = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/toppturinfo/us-central1/getFrostAccessToken",
        {
          "client_id": process.env.REACT_APP_CLIENT_ID,
          "client_secret": process.env.REACT_APP_CLIENT_SECRET,
        }
      );
        localStorage.setItem("accesTokenExpires", new Date.getTime()/1000 + response.data.expires_in);
        localStorage.setItem("accessToken", response.data.access_token);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getWeatherData = useCallback(async ()=>{
    const timeStampNowSec = new Date().getTime()/1000;
    const accessTokenExpires = localStorage.getItem("accessTokenExpires");
    console.log(timeStampNowSec)
    console.log(accessTokenExpires)
    if(!accessTokenExpires || accessTokenExpires< timeStampNowSec){
      getAccessToken();
    }
    const accessToken = localStorage.getItem("accessToken");
    const reponse = await axios.post(
      "http://localhost:5001/toppturinfo/us-central1/getFrostAccessToken",
      {"access_token": accessToken,
        "location": globalLocation
    }
    );

  },[getAccessToken, globalLocation])

  useEffect(()=>{
    console.log(globalLocation)
  },[globalLocation])

  return (
    <div>
      <p>Hei dette er en test for å sjekke req til frost </p>
    </div>
  );
};

export default WeatherPage;
