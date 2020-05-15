// packages
import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";

// styling
import Styles from "./style";

/* Start of component */
const Giant = ({ location, image, name }) => {
  return (
    <View>
      <View style={Styles.direction}>
        <View>
          <Image
            style={Styles.locationEmoji}
            source={{
              uri:
                "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/location_emoji.png",
            }}
          />
        </View>
        <View>
          <Text style={Styles.locationText}>{location}</Text>
        </View>
      </View>
      <ImageBackground
        source={{ uri: image }}
        style={Styles.giantImageStyle}
        imageStyle={Styles.borderRadiusStyle}
      >
        <View style={Styles.imageTextPlacement}>
          <Text style={Styles.imageTextStyle}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Giant;
