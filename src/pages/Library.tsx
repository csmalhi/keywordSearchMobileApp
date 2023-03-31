import React, { useState } from "react";
import { StatusBar, StyleSheet, View, } from "react-native";
import Lists from "../components/Lists";
import Media from "../components/Media";
import Speech from "../components/Speech";
import ResourceService from "../services/resource.service";
import {auth, db} from '../../firebase'
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { Aggregate, Library, Resource } from "../models/resources";
import { Keyword } from "../models/keyword";

export type Props = {
  navigation: any;
  route: any;
};
const LibraryComponent: React.FC<Props> = ({ navigation, route }) => {
  const [selected, setSelected] = useState<Resource>({
    name: '',
    description: '',
    image: '',
    keywords: []
  });
  const [editMode, setEditMode] = useState<boolean>(false)
  const [library, setLibrary] = useState<Library>({})
  const [keywords, setKeywords] = useState<Keyword[]>([{name: ''}])

  const onEdit = (resource: Resource) => {
    setSelected(resource)
    setEditMode(true)
  }

  const onDelete = async (resource: Resource) => {
    const document = await deleteDoc(doc(db, `users/${auth.currentUser?.uid}/resources/${resource.id}`)).then(() => { console.log('Success deleting resource')}).catch(error => console.log('error deleting resource: ', error))
  }

  const getResources = async () => {
    let aggregate =  await ResourceService.getResources(auth, db) as Aggregate
    setKeywords(aggregate.keywords)
    setSelected(aggregate.library[aggregate.keywords[0].name][0])
    setLibrary(aggregate.library)
  }

  React.useEffect(() => {
    getResources()
  }, []);

  const onUpdateResource = async (newResource: Resource) => {
    setSelected(newResource);
    const document = await setDoc(doc(db, `users/${auth.currentUser?.uid}/resources/${newResource.id}`), newResource).then(() => { console.log('Success updating resource')}).catch(error => console.log('error updating resource: ', error))
  }

  return library && selected ? (
    <View style={[styles.container]}>
      <Speech />
      <Media setSelected={setSelected} setEditMode={setEditMode} selectedItem={selected} editMode={editMode} onUpdateResource={onUpdateResource} />
      <Lists onEdit={onEdit} onDelete={onDelete} lists={library} setSelected={setSelected} keywords={keywords}/>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: 20,
  },
  scroll: {
    paddingTop: 10,
  },
});

export default LibraryComponent;
