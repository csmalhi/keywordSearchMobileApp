import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Resource } from '../models/resources';
import { Keyword } from "../models/keyword";

export type Props = {
  item: Resource;
  onSelect: any;
};

const Item: React.FC<Props> = ({ item, onSelect }) => (
  <TouchableOpacity onPress={onSelect} style={[styles.item]}>
    <Image style={[styles.image]} source={{
          uri: item.image,
        }}></Image>
    <View style={[styles.info]}>
      <Text style={[styles.title]}>{item.name}</Text>
      <Text style={[styles.keywords]}>
        {item.keywords.map((keyword: Keyword) => keyword.name).join(", ")}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 100,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    overflow: "hidden",
  },
  keywords: {
    fontSize: 8,
    fontWeight: "300",
    color: "#444",
  },
  description: {
    fontSize: 10,
    fontWeight: "300",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  info: {
    padding: 5,
  },
  title: {
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Roboto",
  },
});

export default Item;