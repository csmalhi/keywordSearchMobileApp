import React, { useState } from "react";
import { Stack, TextInput, Button, Flex  } from "@react-native-material/core";
import { StyleSheet, } from "react-native";
import { Resource } from "../models/resources";

export type Props = {
  setEditMode: any;
  selectedItem: Resource;
  onAddResource: any;
};

const Add: React.FC<Props> = ({selectedItem, setEditMode, onAddResource }) => {
  const [name, setName] = useState(selectedItem.name);
  const [description, setDescription] = useState(selectedItem.description);
  const [image, setImage] = useState(selectedItem.image);
  const [keywords, setKeywords] = useState(selectedItem.keywords);

  const onAdd = () => {
    const newResource: Resource = {
      name,
      description,
      image,
      keywords: [{name: 'TODO REMOVE'}],
      id: selectedItem.id
    }
    onAddResource(newResource)
    setEditMode(false)
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
        <Button title={'Add'}             
          onPress={() => onAdd()}
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

export default Add;
