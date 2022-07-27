import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { useQuery } from "react-query";
// import IpTracker from "../../../api/ip_info";
import client from "../../../services/react-query";
import MapSkeleton from "./MapSkeleton";
require("react-leaflet-markercluster/dist/styles.min.css");

const Map = () => {
  const latitude = client.getQueryData(["unit-business"]).profile?.coords_details?.latitude;
  const longitude = client.getQueryData(["unit-business"]).profile?.coords_details?.longitude;
  // const [combLongLit, setCombLongLit] = useState([]);
  // const address = client.getQueryData(["unit-business"]).profile?.business_details?.address;
  // const { isLoading, isSuccess, error, isError } = useQuery(
  //   "map-api-tracker-for-businesses"
  //   () => IpTracker.getPositionStack(address),
  //   {
  //     onSuccess: (data) => {
  //       if (data) {
  //         const longitude = data?.data[0]?.longitude;
  //         const latitude = data?.data[0]?.latitude;
  //         setCombLongLit([latitude, longitude]);
  //       } else {
  //         const longitude = Math.random(200)
  //         const latitude = Math.random(200)
  //         setCombLongLit([latitude, longitude]);
  //       }
  //     },
  //     refetchOnWindowFocus: false,
  //     refetchOnmount: true,
  //     refetchOnReconnect: true,
  //     retry: false,
  //     staleTime: Infinity,
  //   }
  // );

  // if (isLoading) return <MapSkeleton />;
  // if (isError) return <div>{error}</div>;

  return (
    (longitude && latitude) ? <MapContainer
      className="markercluster-map"
      center={[latitude, longitude]}
      zoom={10}
      maxZoom={18}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[latitude, longitude]} />
    </MapContainer> : <MapSkeleton />
  )
};

export default Map;
