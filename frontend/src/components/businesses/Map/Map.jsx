import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useQuery } from "react-query";
import Loading from "../../reusableComponents/Loading";
import IpTracker from "../../../api/ip_info";
import client from "../../../services/react-query";
require("react-leaflet-markercluster/dist/styles.min.css");

const Map = () => {
  const [combLongLit, setCombLongLit] = useState([]);
  const address = client.getQueryData(["unit-business"]).profile
    .business_details.address;
  const { isLoading, isSuccess, error, isError } = useQuery(
    "map-api-tracker-for-businesses",
    () => IpTracker.getPositionStack(address),
    {
      onSuccess: (data) => {
        const longitude = data?.data[0]?.longitude;
        const latitude = data?.data[0]?.latitude;
        setCombLongLit([latitude, longitude]);
      },
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <div>{error}</div>;

  return (isSuccess && combLongLit.length === 2) ? (
    <MapContainer
      className="markercluster-map"
      center={combLongLit}
      zoom={13}
      maxZoom={18}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={combLongLit} />
    </MapContainer>
  ) : null;
};

export default Map;
