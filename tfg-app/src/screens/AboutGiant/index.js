// packages
import React, { useEffect, useContext } from "react";
import { BackHandler, View, Image, ScrollView } from "react-native";
import Highlighter from "react-native-highlight-words";

// data
import BoldWords from "../../data/GiantTextWithBold";

// context and provider
import { Context as GiantContext } from "../../context/GiantContext";

// components
import AudioPlayer from "../../components/AudioPlayer";
import HeaderRight from "../../components/HeaderRight";

// styling
import Styles from "./style";

/* Start of screen */
const AboutGiant = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true) &&
      handlePauseSound();
  }, []);

  const { state } = useContext(GiantContext);
  const _id = navigation.getParam("_id");
  const giant = state.find((giant) => giant._id === _id);
  const image = giant.image;
  const audio = giant.audio;
  const description = giant.description;

  return (
    <View style={Styles.mainContainer}>
      <Image style={Styles.imageSize} source={{ uri: image }} />
      <AudioPlayer
        audio={audio}
        backButtonOnPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={Styles.textContainer}>
          <Highlighter
            highlightStyle={Styles.boldTextStyle}
            style={Styles.textStyle}
            searchWords={BoldWords}
            textToHighlight={description}
          />
        </View>
      </ScrollView>
    </View>
  );
};

AboutGiant.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <HeaderRight onPress={() => navigation.navigate("Account")} />
    ),
  };
};

export default AboutGiant;
