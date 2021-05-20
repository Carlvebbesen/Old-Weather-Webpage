import React, { Component } from "react";
import Searchbar from "material-ui-search-bar";
import Script from "react-load-script";
import styles from "../../modules/Search.module.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }
  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["geocode", "establishment"],
      componentRestrictions: { country: ["no", "at", "ca"] },
    };

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );
    // Avoid paying for data that you don't need by restricting the
    // set of place fields that are returned to just the address
    // components and formatted address
    this.autocomplete.setFields(["geometry", "formatted_address"]);
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    const addressObject = this.autocomplete.getPlace();
    this.setState({ address: addressObject.formatted_address });
    try {
      this.props.destinationHandler({
        address: addressObject.formatted_address,
        geocode: {
          lat: addressObject.geometry.location.lat(),
          long: addressObject.geometry.location.lng(),
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className={`${styles.SearchBar} ${styles.SearchBarBackgroundImg}`}>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <Searchbar
          id="autocomplete"
          placeholder={"Søk"}
          value={this.state.address}
          style={{
            margin: "0 auto",
            maxWidth: 800,
            minWidth: 300,
            width: "60%",
          }}
        />
      </div>
    );
  }
}

export default Search;
