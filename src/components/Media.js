import { View, StyleSheet, Image } from "react-native";
import React, {useState} from "react";
import Edit from "./Edit";
import { Text, Button, Chip, Flex } from "@react-native-material/core";

export default Media = ({ selectedItem, edit }) => {
  const [editMode, setEditMode] = useState(edit);

  let info;
  if (editMode) {
    info = <Edit toggleEditMode={setEditMode} />;
  } else {
    info = (
      <View style={[styles.info]}>
        <Text style={[styles.title]}>{selectedItem.name}</Text>
        <Text style={[styles.description]}>{selectedItem.description}</Text>
        <Flex direction="row" justify="between">
          <Text style={[styles.keywords]}>
            {selectedItem.keywords.map((keyword) => {
              return <Chip key={keyword.name} label={keyword.name}></Chip>;
            })}
          </Text>
          <Button
            title="Edit"
            onPress={() => setEditMode(true)}
          />
        </Flex>
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
