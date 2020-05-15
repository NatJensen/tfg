// packages
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { getDistance, convertDistance } from "geolib";

// hooks
import useLocation from "../../hooks/useLocation";

// styling
import Styles from "./style";

/* Start of component */
const Distance = ({ giantLatitude, giantLongitude, firstname }) => {
  const [location, errorMsg] = useLocation();
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (location) {
      let dis = getDistance(
        {
          latitude: giantLatitude,
          longitude: giantLongitude,
        },
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
      );
      setDistance(dis);
    }
  });

  const thousandMeters = 1000;
  let loadingDistance = "Loading distance to " + firstname + "...";
  let loadedDistance =
    firstname +
    " is " +
    (distance > thousandMeters
      ? convertDistance(distance, "km").toFixed(1) + " km "
      : distance + "m ") +
    "away";

  return (
    <>
      {!location ? (
        <Text style={Styles.distanceTextStyle}>{loadingDistance}</Text>
      ) : errorMsg ? (
        <Text style={Styles.distanceTextStyle}>{errorMsg}</Text>
      ) : (
        <Text style={Styles.distanceTextStyle}>{loadedDistance}</Text>
      )}
    </>
  );
};

export default Distance;
