// packages
import React from "react";
import MapView from "react-native-maps";

// constants
import Colors from "../../constants/colors";

// styling
import Styles from "./style";
import MapFeatures from "./MapFeatures";

/* Start of component */
const Map = ({ latitude, longitude }) => {
  return (
    <MapView
      style={Styles.mapStyle}
      showsUserLocation={true}
      followUserLocation={true}
      customMapStyle={MapFeatures.mapStyle}
      initialRegion={{
        latitudeDelta: 0.10022,
        longitudeDelta: 0.101021,
        latitude: latitude,
        longitude: longitude,
      }}
    >
      <MapView.Circle
        center={{ latitude: latitude, longitude: longitude }}
        radius={275}
        strokeWidth={4}
        strokeColor={Colors.strokeColorCircle}
        fillColor={Colors.fillColorCircle}
      />
    </MapView>
  );
};

export default Map;
