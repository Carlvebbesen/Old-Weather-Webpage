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
          "client_id": "3303060c-4ad8-4ea3-a7d2-4bc17dd60eed",
          "client_secret": "6c15ec72-939b-4515-8d16-4d7820bb9c8e",
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
