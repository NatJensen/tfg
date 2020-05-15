// packages
import React from "react";
import { Image } from "react-native";

/* Start of component */
const RewardLogo = ({ rewardLogoStyle }) => {
  return (
    <Image
      style={rewardLogoStyle}
      source={{
        uri: "https://tfg-bucket.s3.eu-north-1.amazonaws.com/images/reward.png",
      }}
    />
  );
};

export default RewardLogo;
