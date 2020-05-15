// packages
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Entypo } from "@expo/vector-icons";

// constants
import Colors from "../../constants/colors";

// components
import CustomButton from "../CustomButton";

// styling
import Styles from "./style";

/* Start of component */
const AudioPlayer = ({ audio, backButtonOnPress }) => {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);

  const soundObject = new Audio.Sound();
  const playbackStatus = { shouldPlay: false, isLooping: false };

  useEffect(() => {
    loadAudio();
  }, []);

  const onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
      setPlaying(!playing);
    }
  };

  async function loadAudio() {
    try {
      soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await soundObject.loadAsync({ uri: audio }, playbackStatus, false);
      setPlaybackObject(soundObject);
      setLoaded(!loaded);
    } catch (error) {
      console.log(error);
    }
  }

  async function unloadAudio() {
    try {
      await playbackObject.unloadAsync();
      setLoaded(!loaded);
    } catch (error) {
      console.log(error);
    }
  }

  async function togglePlayPause() {
    try {
      if (loaded === true) {
        if (!playing) {
          await playbackObject.setStatusAsync({ shouldPlay: true });
          setPlaying(!playing);
        } else {
          await playbackObject.setStatusAsync({ shouldPlay: false });
          setPlaying(!playing);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={Styles.audioContainer}>
      <TouchableOpacity onPress={() => togglePlayPause()}>
        {!playing ? (
          <Entypo name="controller-play" size={45} color={Colors.black} />
        ) : (
          <Entypo name="controller-paus" size={45} color={Colors.black} />
        )}
      </TouchableOpacity>
      <CustomButton
        buttonColor={Colors.orange}
        buttonText="Back"
        onPress={() => unloadAudio() && backButtonOnPress()}
      ></CustomButton>
    </View>
  );
};

export default AudioPlayer;
