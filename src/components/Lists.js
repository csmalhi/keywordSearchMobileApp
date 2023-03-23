import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Item from "./Item";

const renderItem = ({ item }) => {
  // const [selectedId, setSelectedId] = useState();
  // const backgroundColor = item.id === selectedId ? "#222" : "#555";
  // const color = item.id === selectedId ? "white" : "black";
  return (
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={"#fff"}
    />
  );
};

export default Lists = ({ lists }) => {
  let sortedLists = Object.keys(lists)
    .sort()
    .map((keyword) => {
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
