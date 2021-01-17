import React, { Component } from "react";
import Searchbar from 'material-ui-search-bar';
import Script from "react-load-script";

class Search extends Component {

    handleScriptLoad = () => {
        // Declare Options For Autocomplete 
        const options = { types: ["geocode", "establishment"],
        componentRestrictions: {country: ['no', "at","ca"]}
    };

        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            options);
        // Avoid paying for data that you don't need by restricting the 
        // set of place fields that are returned to just the address
        // components and formatted address
        this.autocomplete.setFields(["geometry", "formatted_address"]);
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener("place_changed",
            this.handlePlaceSelect);
    }

    handlePlaceSelect = ()=>{
        const addressObject = this.autocomplete.getPlace()
        console.log("geometry: " + addressObject.geometry.location)

        console.log("formatted address" + addressObject.formatted_address)
    }

    render() {
        return (
        <div>
            <Script url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`}
                onLoad={this.handleScriptLoad}
            />
            <Searchbar
                id="autocomplete"
                placeholder={"Søk"}
                //value={address}
                style={{
                    margin: "0 auto",
                    maxWidth: 800
                }}
            />
        </div>
    );
}
}

export default Search;