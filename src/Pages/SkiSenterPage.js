import React, { useCallback, useContext, useEffect, useState } from "react";
import { DestinationContext } from "../Context/LocationContext";
import fnuggAxios from "../Axios-instances/FnuggAxios";
import Spinner from "../Components/Spinner/Spinner";
import PagesFrame from "../Components/PagesFrame/PagesFrame";
import SnowPost from "../Components/SnowPost/SnowPost"
import "./Pages.css"

const SkiSenterPage = () => {
    const locationContext = useContext(DestinationContext);
    const [skisenterID, setSkisenterID] = useState({id: [""], name: ""});
    const [isLoading, setIsLoading] = useState(false);

    const loadData = useCallback( async ()=>{
        let response;
        try {
            setIsLoading(true)
            if(locationContext.pickedLocation !== ""){
                const geocodeLat = locationContext.pickedLocation.geocode.lat;
                const geocodeLong = locationContext.pickedLocation.geocode.long;
                response = await fnuggAxios.get(`/geodata/getnearest?lat=${geocodeLat}&lon=${geocodeLong}&distance=100km&size=3`);
                setSkisenterID({id:
                     [response.data.hits.hits[0]._id, response.data.hits.hits[1]._id, response.data.hits.hits[2]._id],
                      name: "Søkt etter: " + locationContext.pickedLocation.address});
            }
            else {
                response = await fnuggAxios.get("/search?size=1&sort=conditions.combined.top.snow.depth_terrain:desc&exists=conditions.combined.top.snow.depth_terrain")
                setSkisenterID({id: [response.data.hits.hits[0]._id], name: "Skisenteret med mest snø:"});
            }
            setIsLoading(false)
            //console.log(response)
           
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    },[locationContext])

        useEffect(() => {
            loadData();
        }, [loadData])
    //Lage også en oversikt som viser hvor mye snø det har kommet de siste dagene
    return(
        <div className="SkisenterBackground">
        <PagesFrame title={skisenterID.name}>
            {isLoading ? <Spinner/> : null}
            {skisenterID.id.map(sId => <SnowPost key={sId} id = {sId}/>)}
        </PagesFrame>
        </div>
    );
    
}

export default SkiSenterPage;