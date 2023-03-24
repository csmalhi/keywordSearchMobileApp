import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Item from "./Item";
import { Library, Resource } from "../models/resources";
import { Keyword } from "../models/keyword";

export type RenderProps = {
  item: Resource;
  setSelectedId: any;
};

export type Props = {
  lists: Library;
};

const renderItem: React.FC<RenderProps> = ({ item, setSelectedId }) => {
  // const [selectedId, setSelectedId] = useState();

  // const backgroundColor = item.id === selectedId ? "#222" : "#555";
  // const color = item.id === selectedId ? "white" : "black";
  return (
    <Item
      item={item}
      onSelect={() => setSelectedId(item.id)}
    />
  );
};

const Lists: React.FC<Props> = ({ lists }) => {
  const [selectedId, setSelectedId] = useState();

  let sortedLists = Object.keys(lists)
    .sort()
    .map((keyword: string) => {
      return (
        <View style={[styles.listsContainer]} key={keyword}>
          <Text style={[styles.keywordTitle]}>{keyword}</Text>
          <FlatList
            data={lists[keyword]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            width={"100%"}
          />
        </View>
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
