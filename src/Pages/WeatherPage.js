import React, { useContext, useEffect } from "react";
import { DestinationContext } from "../Context/LocationContext";
import frostAxios from "../Axios-instances/FrostAxios";

const WeatherPage = () => {
    const globalLocation = useContext(DestinationContext);

    useEffect(() => {
        console.log(globalLocation.pickedLocation)
        console.log(globalLocation.geocode)
        frostAxios.get("/sources/v0.jsonld?geometry=nearest(POINT(8.515648 60.862469 ))", {
            client_id: "3303060c-4ad8-4ea3-a7d2-4bc17dd60eed",
            client_secret: "6c15ec72-939b-4515-8d16-4d7820bb9c8e",
            grant_type: "client_credentials"
        }
        ).then(response => {
            console.log("suksess !!!");
            console.log(response);;
        }).catch(error => {
            console.log(error)
        })

    }, [globalLocation])


    return (
        <div>
            <p>Hei dette er en test for å sjekke req til frost </p>
        </div>
    )
}

export default WeatherPage;