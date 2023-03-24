import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "@react-native-material/core";


export default Speech = () => (
  <View style={[styles.search]}>
    <Text style={[styles.searchText]}>
      You will see your speech dictation and keywords match up here
    </Text>
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
