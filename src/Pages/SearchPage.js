import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Search from "../Components/Search/Search";
import {DestinationContext} from "../Context/LocationContext";

const SearchPage = () => {
    const locationContext = useContext(DestinationContext)
    const history = useHistory();
    
    const setLocationHandler = (locationObject) => {
        locationContext.setLocation(locationObject);
        history.push("/weatherdata")

    }
    return (
        <div>
            <p>
                Dette er søkesiden
         </p>
            <Search destinationHandler={setLocationHandler} />
        </div>
    )
}

export default SearchPage;