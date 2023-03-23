import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { Chip } from "@react-native-material/core";
import Edit from "./Edit";

export default Media = ({ selectedItem, editMode }) => {
  let info;
  if (editMode) {
    info = <Edit />;
  } else {
    info = (
      <View style={[styles.info]}>
        <Text style={[styles.title]}>{selectedItem.name}</Text>
        <Text style={[styles.description]}>{selectedItem.description}</Text>
        <Text style={[styles.keywords]}>
          {selectedItem.keywords.map((keyword) => {
            return <Chip key={keyword.name} label={keyword.name}></Chip>;
          })}
        </Text>
      </View>
    );
  }
  return (
    <View style={[styles.media]}>
      <Image style={[styles.image]} src={selectedItem.image}></Image>
      {info}
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    height: 350,
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
    marginBottom: 20,
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
