import { Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Item from "./Item";
import { Library, Resource } from "../models/resources";
import { Flex } from "@react-native-material/core";

export type RenderProps = {
  item: Resource;
  setSelected: any;
};

export type Props = {
  lists: Library;
  setSelected: any;
};

const renderItem: React.FC<RenderProps> = ({ item, setSelected }) => {
  return (
    <Item
      item={item}
      onSelect={() => setSelected(item)}
    />
  );
};

const Lists: React.FC<Props> = ({ lists, setSelected }) => {
  let sortedLists = Object.keys(lists)
    .map((keyword: string) => {
      return (
        <Flex style={[styles.listsContainer]} key={keyword}>
          <Text style={[styles.keywordTitle]}>{keyword}</Text>
          <FlatList
            data={lists[keyword]}
            renderItem={({item}) => renderItem({item, setSelected})}
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
