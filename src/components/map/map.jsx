import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import './map.css';
import {connect} from "react-redux";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      defaultCity: null,
      offers: [],
      icon: null,
      layer: null
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

  componentDidUpdate(prevProps) {
    if (this.props.defaultCity !== prevProps.defaultCity) {
      // this.map.remove();
      // const zoom = this.props.config.DЕFAULT_ZOOM;
      // this.map = leaflet.map(`map`, {
      //   center: this.props.defaultCity,
      //   zoom,
      //   zoomControl: false,
      //   marker: true
      // });

      this.updateLocation();
      this.refreshView();
    }
  }

  refreshView() {
    // this.map.remove();
    // const zoom = this.props.config.DЕFAULT_ZOOM;
    // this.map = leaflet.map(`map`, {
    //   center: this.defaultCity,
    //   zoom,
    //   zoomControl: false,
    //   marker: true
    // });

    this.map.setView(this.defaultCity, 12);

    // const offers =  this.offers.forEach((offer) => {})
    const coords = this.props.offers[0].coordinates;
    const layer = leaflet.marker(coords, {icon: this.icon}).addTo(this.map);
    layer.addTo(this.map)
      // .addTo(this.map);

    // this.offers.forEach((offer) => {
    //   const offerCords = offer.coordinates;
    //   leaflet
    //     .marker(offerCords, {icon: this.icon})
    //     .addTo(this.map);
    // });
  }

  updateLocation() {
    this.defaultCity = this.props.defaultCity;
    this.offers = this.props.offers;
  }

  render() {
    return (
      <React.Fragment>
        <div id="map"></div>
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  config: PropTypes.object.isRequired,
  // activeOffer: PropTypes.string
};

const mapStateToProps = (state) => ({
  // activeOffer: state.activeOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
