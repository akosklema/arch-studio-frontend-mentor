import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import MarkerIcon from '../../images/icons/MarkerIcon';

function Map({ className, office }) {
  const [map, setMap] = useState();

  const initial = [34.5, -91.5];
  const main = [36.038855, -86.541619];
  const secondary = [32.282443, -96.554775];

  const mainOfficePopupRef = useRef();
  const secondaryOfficePopupRef = useRef();

  useEffect(() => {
    if (office === 'main') {
      mainOfficePopupRef.current.openOn(map);
      map.setView(main, 5);

    } else if (office === 'secondary') {
      secondaryOfficePopupRef.current.openOn(map);
      map.setView(secondary, 5);
    }

  }, [office, map, main, secondary]);

  return (
    <MapContainer className={className} whenCreated={setMap} center={initial} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={MarkerIcon} position={main}>
        <Popup ref={mainOfficePopupRef}>
          Main Office
        </Popup>
      </Marker>
      <Marker icon={MarkerIcon} position={secondary}>
        <Popup ref={secondaryOfficePopupRef}>
          Office II
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;