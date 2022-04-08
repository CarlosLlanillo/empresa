import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
  Data,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { Box } from '@material-ui/core';

const data = [
  {
    name: 'Chicago, Illinois',
    position: { lat: 41.881832, lng: -87.623177 },
  },
  {
    name: 'Denver, Colorado',
    position: { lat: 39.739235, lng: -104.99025 },
  },
  {
    name: 'Los Angeles, California',
    position: { lat: 34.052235, lng: -118.243683 },
  },
  {
    name: 'New York, New York',
    position: { lat: 40.712776, lng: -74.005974 },
  },
];

const Map = (props) => {
  const { setSelectedMarker } = props;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCQl_8sxlwxoL6DQthFswq0di2VlzDvek4',
  });

  const [center, setCenter] = useState({ lat: 43.46, lng: -3.82 });
  const [markers, setMarkers] = useState(data);
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    setSelectedMarker(markers[marker]);
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleMapClick = (e) => {
    setActiveMarker(null);
    console.log('clcik event', e);
    let marker;
    if (e.latLng) {
      marker = { name: '', position: e.latLng.toJSON() };
    } else {
      marker = { name: '', position: e.h.toJSON() };
    }

    setMarkers(markers.concat(marker));
  };

  const handleDeleteMarker = (marker) => {
    setMarkers(markers.filter((_, i) => marker !== i));
  };

  const onDataLoad = (data) => {
    console.log('data load: ', data);
  };

  const onDataClick = (data) => {
    console.log('data click: ', data);
  };

  return isLoaded ? (
    <GoogleMap
      // ref={mapRef}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={center}
      onCenterChanged={() => setCenter}
      zoom={5}
      onClick={handleMapClick}
    >
      {markers.map((marker, i) => (
        <Marker
          key={i}
          position={marker.position}
          onClick={() => handleActiveMarker(i)}
          onDblClick={() => handleDeleteMarker(i)}
        >
          {activeMarker === i ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{marker.name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
      {/* <Data
        onLoad={onDataLoad}
        options={{
          controls: ['Point'],
          // drawingMode: 'Point', //  "LineString" or "Polygon".
          featureFactory: (position) => handleMapClick(position),
          // clickable: true,
          // Type:  MarkerShape,
          // shape: 'shape',
        }}
      /> */}
      {
        <DirectionsService
          // required
          options={{
            // /eslint-disable-line react-perf/jsx-no-new-object-as-prop
            destination: { lat: 40.712776, lng: -74.005974 },
            origin: { lat: 40.712776, lng: -77.005974 },
            travelMode: 'DRIVING',
          }}
          // required
          callback={() => {}}
        />
      }

      {
        <DirectionsRenderer
          // required
          options={{
            // /eslint-disable-line react-perf/jsx-no-new-object-as-prop
            directions: this.state.response,
          }}
        />
      }
    </GoogleMap>
  ) : null;
};

export default Map;
