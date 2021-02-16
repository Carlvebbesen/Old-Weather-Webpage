import React, { useContext } from "react";
import { DestinationContext } from "../Context/LocationContext";

const WeatherPage = () => {
    const globalLocation = useContext(DestinationContext);


    return (
        <div>
            <p>Hei dette er en test for å sjekke req til frost </p>
        </div>
    )
}

export default WeatherPage;