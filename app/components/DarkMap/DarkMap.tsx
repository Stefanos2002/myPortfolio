"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
const center = { lat: 38.2461111, lng: 21.7355757 };
const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  overflow: "hidden",
};
export default function DarkMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      styles: darkStyle,
    }),
    []
  );
  if (!isLoaded) return <div className="text-neutral-300">Loading map…</div>;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
    >
      {" "}
      <Marker position={center} />{" "}
    </GoogleMap>
  );
}
const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#1f1f1f" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1f1f1f" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8e8e8e" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a3a3a3" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bbbbbb" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#2b2b2b" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b6b6b" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#303030" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8e8e8e" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#212121" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#1a1a1a" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
];
<div data-aos="fade-right" className="w-full h-96 order-2">
  {" "}
  <DarkMap />{" "}
</div>;
