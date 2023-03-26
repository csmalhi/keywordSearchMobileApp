import React, { useState } from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import { Flex } from "@react-native-material/core";

import Lists from "../components/Lists";
import Media from "../components/Media";
import Speech from "../components/Speech";
import { Resource } from "../models/resources";
import Edit from "../components/Edit";

export type Props = {
  navigation: any;
  route: any;
};
const AddComponent: React.FC<Props> = ({ navigation, route }) => {
  const [editMode, setEditMode] = useState(false)
  const [newResource, setNewResource] = useState<Resource>({
    id: '',
    name: '',
    description: '',
    image: '',
    keywords: [{name: ''}]
  });

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <Flex style={[styles.media]}>
    <Image style={[styles.image]} source={{
      uri: newResource.image ? newResource.image : 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    }}></Image>
    <Edit selectedItem={newResource} setEditMode={setEditMode} setSelectedItem={setNewResource}/>
  </Flex>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 10,
  },
  media: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 5,
    paddingTop: 20,
    height: 600,
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
});

export default AddComponent;
