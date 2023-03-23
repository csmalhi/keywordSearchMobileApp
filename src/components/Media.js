import { View, StyleSheet } from "react-native";
import React from "react";

export default Media = ({ selectedId }) => {
  return <View style={[styles.media]}></View>;
};

const styles = StyleSheet.create({
  media: {
    height: 200,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
