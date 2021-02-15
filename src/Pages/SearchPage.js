import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Search from "../Components/Search/Search";
import {DestinationContext} from "../Context/LocationContext";
import "./Pages.css"

const SearchPage = () => {
    const locationContext = useContext(DestinationContext)
    const history = useHistory();
    
    const setLocationHandler = (locationObject) => {
        locationContext.setLocation(locationObject);
        locationContext.setActiveNavBar("/SkiSenter")
        history.push("/SkiSenter")

    }
    return (
        <div className="FrameSearchPage">
               <div className="SearchPage">
                    <h1 className="TitleSearchPage">Finn ut hvor og hva det har snødd!</h1>
                    <Search destinationHandler={setLocationHandler} />
               </div>
        </div>
    )
}

export default SearchPage;