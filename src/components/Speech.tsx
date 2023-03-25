import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "@react-native-material/core";
import SpeechRecognitionScreen from "../services/speech.service";


const Speech = () => (
  <View style={[styles.search]}>
    <Text style={[styles.searchText]}>
      You will see your speech dictation and keywords match up here
    </Text>
    <SpeechRecognitionScreen />
  </View>
);

const styles = StyleSheet.create({
  searchText: {
    color: "#222",
    fontFamily: "Inconsolata",
    fontSize: 18,
    lineHeight: 20,
  },
  search: {
    backgroundColor: "#eee",
    height: 60,
    width: "100%",
    padding: 10,
  },
});

export default Speech