import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import './map.css';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      defaultCity: null,
      offers: [],
      icon: null,
    };
  }

  componentDidMount() {
    const {config} = this.props;
    this.updateLocation();
    this.icon = leaflet.icon({
      iconUrl: config.ICON_URL,
      iconSize: config.ICON_SIZE
    });

    const zoom = config.DЕFAULT_ZOOM;
    this.map = leaflet.map(`map`, {
      center: this.defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.defaultCity, zoom);

    leaflet
      .tileLayer(config.TILE_LAYER_URL_TEMPLATE, config.TILE_LAYER_URL_OPTIONS)
      .addTo(this.map);
    this.refreshView();

  }

  componentDidUpdate() {
    this.updateLocation();
    this.refreshView();
  }

  refreshView() {
    this.map.setView(this.defaultCity, 12);

    this.offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      leaflet
        .marker(offerCords, {icon: this.icon})
        .addTo(this.map);
    });
  }

  updateLocation() {
    this.defaultCity = this.props.defaultCity;
    this.offers = this.props.offers;
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  config: PropTypes.object.isRequired
};


export default Map;
