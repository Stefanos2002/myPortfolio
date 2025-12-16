"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import Image from "next/image"; // Import Image for LCP fix

const center = { lat: 38.2461111, lng: 21.7355757 };

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Define styles outside component to prevent re-renders
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

export default function DarkMap() {
  // State to track if user wants to interact with the map
  const [showMap, setShowMap] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    // Prevent the script from loading until we actually need it
    preventGoogleFontsLoading: true,
  });

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      styles: darkStyle,
    }),
    []
  );

  // If map isn't requested yet OR script isn't loaded, show the Facade (Image)
  if (!showMap || !isLoaded) {
    return (
      <div
        className="w-full h-full relative cursor-pointer group rounded-xl overflow-hidden"
        onClick={() => setShowMap(true)}
        onMouseEnter={() => setShowMap(true)} // Optional: Load on hover
      >
        <Image
          src="/images/DarkMap.png"
          alt="Map location of Patras, Greece"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
          <button
            className="bg-neutral-800/90 text-white px-4 py-2 rounded-full text-sm font-medium border border-neutral-600 shadow-lg backdrop-blur-sm"
            aria-label="Load interactive map"
          >
            Click to Interact
          </button>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
