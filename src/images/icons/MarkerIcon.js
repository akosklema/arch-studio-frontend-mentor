import L from 'leaflet';

import icon from './map-location-marker.svg'

const MarkerIcon = new L.icon({
  iconUrl: icon,
  iconAnchor: [20, 45],
  popupAnchor: [2, -40]
});

export default MarkerIcon;