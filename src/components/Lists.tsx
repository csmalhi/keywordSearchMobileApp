import { Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Item from "./Item";
import { Library, Resource } from "../models/resources";
import { Flex } from "@react-native-material/core";
import { Keyword } from "../models/keyword";

export type RenderProps = {
  item: Resource;
  setSelected: any;
  onEdit: any;
  onDelete: any;
};

export type Props = {
  lists: Library;
  setSelected: any;
  onEdit: any;
  onDelete: any;
  keywords: Keyword[];
};

const renderItem: React.FC<RenderProps> = ({ item, setSelected, onEdit, onDelete }) => {
  return (
    <Item
      onEdit={onEdit}
      onDelete={onDelete}
      item={item}
      onSelect={() => setSelected(item)}
    />
  );
};

const Lists: React.FC<Props> = ({ lists, setSelected, onEdit, onDelete }) => {
  let sortedLists = Object.keys(lists)
    .map((keyword: string) => {
      return (
        <Flex style={[styles.listsContainer]} key={keyword}>
          <Text style={[styles.keywordTitle]}>{keyword}</Text>
          <FlatList
            data={lists[keyword]}
            renderItem={({item}) => renderItem({item, setSelected, onEdit, onDelete})}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </Flex>
      );
    });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={[styles.scroll]}>
      {sortedLists}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listsContainer: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  scroll: {
    paddingTop: 10,
  },
  keywordTitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Roboto",
  },
});

export default Lists;
