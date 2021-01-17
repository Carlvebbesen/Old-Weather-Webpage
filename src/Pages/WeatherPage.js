import React, { useEffect } from "react";
import frostAxios from "./../Axios-instances/FrostAxios";

const WeatherPage = () => {
    useEffect(() => {
        console.log("sender request")
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

    }, [])


    return (
        <div>
            <p>Hei dette er en test for å sjekke req til frost </p>
        </div>
    )
}

export default WeatherPage;