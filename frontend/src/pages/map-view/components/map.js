import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // Load worker code separately with worker-loader
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default


const initialLocation = {
  north: {
    longitude: 105.8401101004162,
    latitude: 21.03566402885757,
  },
  central: {
    longitude: 108.22750076663444,
    latitude: 16.06132660579634,
  },
  south: {
    longitude: 106.6952806389862,
    latitude: 10.777183902209408,
  },
};

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhhbmhoYWkxNDciLCJhIjoiY2xpMnZibmpuMGMzdTNlbHNxOTA1N3A2MCJ9.LgczsJ7OTAoiTO8P-eduFQ";

export default function MapRender({ filter, map }) {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(initialLocation[filter['location']['region']]["longitude"]);
  const [lat, setLat] = useState(initialLocation[filter['location']['region']]["latitude"]);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [lng, lat],
      zoom: zoom,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });
   
    map.current.on("style.load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.current.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });
  }, []);

  useEffect(() => {
    setLng(() => initialLocation[filter['location']['region']]["longitude"]);
    setLat(() => initialLocation[filter['location']['region']]["latitude"]);
  }, [filter]);

  useEffect(() => {
    map.current.flyTo({
        center: [lng, lat],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }, [lng, lat])

  return (
    <div className="map-container mt-5 col-12">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
