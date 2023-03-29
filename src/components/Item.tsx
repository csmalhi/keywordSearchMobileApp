import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Resource } from '../models/resources';
import { Flex, Button, Text, IconButton } from "@react-native-material/core";
import { Keyword } from "../models/keyword";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export type Props = {
  item: Resource;
  onSelect: any;
  onEdit: any;
  onDelete: any;
};

const Item: React.FC<Props> = ({ item, onSelect, onEdit, onDelete }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.item]}>
      <Image style={[styles.image]} source={{
            uri: item.image,
          }}></Image>
      <Flex style={[styles.info]}>
        <Text style={[styles.title]}>{item.name}</Text>
        <Flex direction="column">
          <Text style={[styles.keywords]}>
            {item?.keywords?.map((keyword: Keyword) => keyword.name).join(", ")}
          </Text>
          <Flex direction="row" justify="end">
            <Icon name="pen"
              onPress={() => onEdit(item)}
            />
            <Icon name="delete"
              onPress={() => onDelete(item)}
            />
          </Flex>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
}


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
  button: {
    fontSize: 8,
    height: 15,
    backgroundColor: 'black',
    color:'green'
  }
});

export default Item;