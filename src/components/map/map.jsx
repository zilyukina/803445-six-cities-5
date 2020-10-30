import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import './map.css';
import {connect} from "react-redux";

class Map extends PureComponent {
  componentDidMount() {
    const {config, offers, defaultCity} = this.props;
    this.markers = {};
    this.icon = leaflet.icon({
      iconUrl: config.ICON_URL,
      iconSize: config.ICON_SIZE
    });

    this.activeIcon = leaflet.icon({
      iconUrl: config.ICON_ACTIVE_URL,
      iconSize: config.ICON_SIZE
    });

    const zoom = config.DЕFAULT_ZOOM;
    this.map = leaflet.map(`map`, {
      center: defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(defaultCity, zoom);

    leaflet
      .tileLayer(config.TILE_LAYER_URL_TEMPLATE, config.TILE_LAYER_URL_OPTIONS)
      .addTo(this.map);


    offers.forEach((offer) => {
      const offerCords = offer.coordinates;
      this.markers[offer.id] = leaflet
        .marker(offerCords, {icon: this.icon})
        .addTo(this.map);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.defaultCity !== prevProps.defaultCity) {
      this.map.setView(this.props.defaultCity, 12);
    }

    if (this.props.activeOffer !== prevProps.activeOffer) {
      this.updateMarker(this.props.activeOffer);
    }
  }

  updateMarker(offer) {
    Object.values(this.markers).forEach((marker) => {
      marker.setIcon(this.icon);
    });

    if (offer) {
      this.markers[offer.id].setIcon(this.activeIcon);
    }
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
  defaultCity: PropTypes.arrayOf(PropTypes.number),
  config: PropTypes.object.isRequired,
  activeOffer: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
