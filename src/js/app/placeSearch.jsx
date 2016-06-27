import React from 'react';
import Agolia from 'places.js'

export default class PlaceSearch extends React.Component {
  render() {
    return(
      <div>
        <input
          type="search"
          id="algolia"
          placeholder="Try to type in an address"
        />
      </div>
    );
  }

  componentDidMount() {
    var placesAutocomplete = Agolia({
      container: document.querySelector('#algolia')
    });
  }
}
