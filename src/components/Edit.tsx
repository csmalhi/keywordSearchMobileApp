import React, { useState } from "react";
import { Stack, TextInput, Button, Flex  } from "@react-native-material/core";
import { StyleSheet, } from "react-native";
import { Resource } from "../models/resources";

export type Props = {
  toggleEditMode: any;
  setSelectedItem: any;
  selectedItem: Resource;
};

const Edit: React.FC<Props> = ({selectedItem, toggleEditMode, setSelectedItem }) => {
  const [name, setName] = useState(selectedItem.name);
  const [description, setDescription] = useState(selectedItem.description);
  const [image, setImage] = useState(selectedItem.image);
  const [keywords, setKeywords] = useState(selectedItem.keywords);

  const onSave = () => {
    const updatedResource: Resource = {
      name,
      description,
      image,
      keywords,
      id: ''
    }
    setSelectedItem(updatedResource)
  }

  return (
    <Stack spacing={2} style={[styles.container]}>
      <TextInput
        label="Name"
        variant="outlined"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        label="Description"
        variant="outlined"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        label="Image URL"
        variant="outlined"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        label="Keywords"
        variant="outlined"
        value={keywords.toString()}
        onChange={(value) => setKeywords([{name: value.nativeEvent.text}])}
      />
      <Flex direction="row" justify="between">
        <Button title={'Cancel'}             
          onPress={() => toggleEditMode(false)}
        ></Button>
        <Button title={'Save'}             
          onPress={() => onSave()}
        ></Button>
      </Flex>
    </Stack>
  )}
;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0
  },
  buttons: {

  }
});

export default Edit;
