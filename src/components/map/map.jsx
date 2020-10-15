import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import './map.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contr` +
          `ibutors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(map);

    offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};


export default Map;
