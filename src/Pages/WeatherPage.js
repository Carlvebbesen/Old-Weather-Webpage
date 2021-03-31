import axios from "axios";
import React, { useCallback, useContext, useEffect } from "react";
import { DestinationContext } from "../Context/LocationContext";

const WeatherPage = () => {
  const globalLocation = useContext(DestinationContext);

  const getAccessToken = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://localhost:4000/Toppturinfo/us-central1/getFrostAccessToken",
        {
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  return (
    <div>
      <p>Hei dette er en test for å sjekke req til frost </p>
    </div>
  );
};

export default WeatherPage;
