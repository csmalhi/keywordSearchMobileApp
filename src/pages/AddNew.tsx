import React, { useState } from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import { Flex } from "@react-native-material/core";
import { Resource } from "../models/resources";
import Edit from "../components/Edit";
import Add from "../components/Add";
import {db, auth} from '../../firebase'
import { addDoc, collection } from "firebase/firestore";

export type Props = {
  navigation: any;
  route: any;
};
const AddNewComponent: React.FC<Props> = ({ navigation, route }) => {
  const [editMode, setEditMode] = useState(false)
  const [newResource, setNewResource] = useState<Resource>({
    name: '',
    description: '',
    image: '',
    keywords: []
  });
  const user = auth.currentUser;

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  const onAddResource = async (resource: Resource) => {
    setNewResource(resource);
    const doc = await addDoc(collection(db, `users/${user?.uid}/resources`), resource).then(() => { console.log('Success adding resource')}).catch(error => console.log('error adding resource: ', error))
  }

  return (
    <Flex style={[styles.media]}>
    <Image style={[styles.image]} source={{
      uri: newResource.image ? newResource.image : 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    }}></Image>
    <Add selectedItem={newResource} setEditMode={setEditMode} onAddResource={onAddResource}/>
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

export default AddNewComponent;
