import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Chip } from "@react-native-material/core";

export default Media = ({ selectedItem }) => {
  return (
    <View style={[styles.media]}>
      <Image style={[styles.image]} src={selectedItem.image}></Image>
      <View style={[styles.info]}>
        <Text style={[styles.title]}>{selectedItem.name}</Text>
        <Text style={[styles.description]}>{selectedItem.description}</Text>
        <Text style={[styles.keywords]}>
          {selectedItem.keywords.map((keyword) => {
            return <Chip key={keyword.name} label={keyword.name}></Chip>;
          })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    height: 300,
    width: "100%",
    padding: 5,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  description: {
    fontSize: 10,
    fontWeight: "300",
    marginBottom: 30,
  },
  info: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "Roboto",
    marginBottom: 5,
  },
});
