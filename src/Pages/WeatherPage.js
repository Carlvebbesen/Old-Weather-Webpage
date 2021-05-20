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
//Sort BY:

//1HOUR:
//  air_temperature,
//  wind_from_direction,
//  max(wind_speed PT1H),
//  sum(precipitation_amount PT1H)


//PR 6 HOUR: 
//  over_time(weather_type_primary_significance)
//  weather_type


//PR 1 DAY:
//  surface_snow_thickness,
//  max(relative_humidity P1D),
//  sum(precipitation_amount P1D),
//  max(visibility_in_air_poorest_direction P1D),
//  mean(air_temperature P1D),
//  max(max(wind_speed PT1H) P1D),
//  max(wind_speed_of_gust P1D),
//  max(wind_speed P1D),

//UNDEFINED:
//  mean(soil_temperature PT1H),
//  sum(precipitation_amount PT6H),
//  over_time(change_in_surface_snow_thickness P1D),
//  over_time(thickness_of_snowfall_amount P1D),
//  over_time(weather_class1_primary_significance PT6H),
//  over_time(weather_class1_secondary_significance PT6H),
//  over_time(weather_class1_tertiary_significance PT6H),
//  over_time(weather_class1_quaternary_significance PT6H)


//OTHERS;
//integral_of_deficit(mean(air_temperature PT1H) P1D 17.0)


 
