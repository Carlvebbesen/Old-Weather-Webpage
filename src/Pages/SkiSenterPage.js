import React, { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../Context/LocationContext";
import fnuggAxios from "../Axios-instances/FnuggAxios";
import Iframe from "react-iframe";

const SkiSenterPage = () => {
    const locationContext = useContext(DestinationContext);
    const [skisenterID, setSkisenterID] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let skisenterIframe = <p>Du må bruke søke funksjonen først for å finne nærmeste skisenter, kan eventuelt vise det senteret det har kommet mest snø i</p>

        useEffect(() => {
            if (locationContext.pickedLocation !== "") {
                const geocodeLat = locationContext.pickedLocation.geocode.lat;
                const geocodeLong = locationContext.pickedLocation.geocode.long;
                console.log(locationContext)
                let skiSenterResponse;
                if (!skiSenterResponse) {
                    setIsLoading(true)
                    fnuggAxios.get(`/geodata/getnearest?lat=${geocodeLat}&lon=${geocodeLong}&distance=100km`).then(response => {
                        setIsLoading(false)
                        console.log(response)
                        if (response.data.hits.total === 0) {
                            //Her må de skje noe ved null skisentre, funnet ved 100 km radius 
                        }
                        else {
                            setSkisenterID(response.data.hits.hits[0]._id);
                            skiSenterResponse = response;
                        }
                    }).catch(error => {
                        console.log(error)
                        setIsLoading(false);
                    })
                }
                //sender for å hente widgetten denne vil også updates hvis en av de andre widgetsene velges, altså ikke hovedwidgetten.
            }
        }, [locationContext, skisenterID])
        if(skisenterID!==""){
            skisenterIframe=(<Iframe
            url={`https://fnugg.no/widget/resort/?id=${skisenterID}&theme=light`}
            width="100%"
            height="600px"
            />)
        }
    return (
        skisenterIframe
    )
}

export default SkiSenterPage;