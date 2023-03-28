import { StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Edit from "./Edit";
import { Text, Button, Chip, Flex } from "@react-native-material/core";
import { Keyword } from "../models/keyword";
import { Resource } from "../models/resources";

export type Props = {
  selectedItem: Resource;
  editMode: boolean
  setEditMode: any;
  setSelected: any;
  onUpdateResource: any
};

const Media: React.FC<Props> = ({ selectedItem, editMode, setEditMode, setSelected, onUpdateResource }) => {
  useEffect(() => {
    setEditMode(false);
  },[selectedItem])

  let info;
  if (editMode) {
    info = <Edit
      selectedItem={selectedItem}
      setEditMode={setEditMode}
      setSelectedItem={setSelected}
      onUpdateResource={onUpdateResource}
    />;
  } else {
    info = (
      <Flex style={[styles.info]}>
        <Text style={[styles.title]}>{selectedItem.name}</Text>
        <Text style={[styles.description]}>{selectedItem.description}</Text>
        <Flex direction="row" justify="between">
          <Text style={[styles.keywords]}>
            {selectedItem.keywords.map((keyword: Keyword) => {
              return <Chip key={keyword.name} label={keyword.name}></Chip>;
            })}
          </Text>
          <Button
            title="Edit"
            onPress={() => setEditMode(true)}
          />
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex style={[styles.media]}>
      <Image style={[styles.image]} source={{
        uri: selectedItem.image,
      }}></Image>
      {info}
    </Flex>
  );
};

const styles = StyleSheet.create({
  media: {
    height: 400,
    width: "100%",
    padding: 5,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
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
  keywords: {
    fontSize: 8,
    fontWeight: "300",
    color: "#444",
  },
});

export default Media;
