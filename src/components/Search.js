import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  FlatList,
  List,
} from "react-native";

const DATA = {
  Lions: [
    {
      id: "1",
      name: "Lion pride",
      image:
        "https://lionalert.org/wp-content/uploads/2020/01/lion-behaviour-980x613.jpg",
      description:
        "A group of lions lounging in the sun. A group of lions lounging in the sun. A group of lions lounging in the sun. A group of lions lounging in the sun. A group of lions lounging in the sun.",
      keywords: [{ name: "lions" }, { name: "pride" }, { name: "safari" }],
    },
    {
      id: "2",
      name: "Lion roar",
      image:
        "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Lion%20House%203_0510_0.jpg?itok=fcvxql0t",
      description: "A lion letting out a mighty roar.",
      keywords: [{ name: "lions" }, { name: "roar" }, { name: "safari" }],
    },
    {
      id: "3",
      name: "Lion pride",
      image:
        "https://lionalert.org/wp-content/uploads/2020/01/lion-behaviour-980x613.jpg",
      description: "A group of lions lounging in the sun.",
      keywords: [{ name: "lions" }, { name: "pride" }, { name: "safari" }],
    },
    {
      id: "4",
      name: "Lion roar",
      image:
        "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Lion%20House%203_0510_0.jpg?itok=fcvxql0t",
      description: "A lion letting out a mighty roar.",
      keywords: [{ name: "lions" }, { name: "roar" }, { name: "safari" }],
    },
    {
      id: "5",
      name: "Lion pride",
      image:
        "https://lionalert.org/wp-content/uploads/2020/01/lion-behaviour-980x613.jpg",
      description: "A group of lions lounging in the sun.",
      keywords: [{ name: "lions" }, { name: "pride" }, { name: "safari" }],
    },
    {
      id: "6",
      name: "Lion roar",
      image:
        "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Lion%20House%203_0510_0.jpg?itok=fcvxql0t",
      description: "A lion letting out a mighty roar.",
      keywords: [{ name: "lions" }, { name: "roar" }, { name: "safari" }],
    },
    {
      id: "7",
      name: "Lion pride",
      image:
        "https://lionalert.org/wp-content/uploads/2020/01/lion-behaviour-980x613.jpg",
      description: "A group of lions lounging in the sun.",
      keywords: [{ name: "lions" }, { name: "pride" }, { name: "safari" }],
    },
    {
      id: "8",
      name: "Lion roar",
      image:
        "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Lion%20House%203_0510_0.jpg?itok=fcvxql0t",
      description: "A lion letting out a mighty roar.",
      keywords: [{ name: "lions" }, { name: "roar" }, { name: "safari" }],
    },
    {
      id: "9",
      name: "Lion pride",
      image:
        "https://lionalert.org/wp-content/uploads/2020/01/lion-behaviour-980x613.jpg",
      description: "A group of lions lounging in the sun.",
      keywords: [{ name: "lions" }, { name: "pride" }, { name: "safari" }],
    },
    {
      id: "10",
      name: "Lion roar",
      image:
        "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Lion%20House%203_0510_0.jpg?itok=fcvxql0t",
      description: "A lion letting out a mighty roar.",
      keywords: [{ name: "lions" }, { name: "roar" }, { name: "safari" }],
    },
  ],
  Giraffes: [
    {
      id: "1",
      name: "Giraffe herd",
      image: "https://cdn.britannica.com/67/92767-050-95002DCE/Giraffes.jpg",
      description: "A group of giraffes walking through the savanna.",
      keywords: [{ name: "giraffes" }, { name: "herd" }, { name: "safari" }],
    },
    {
      id: "2",
      name: "Tallest giraffe",
      image:
        "https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?h=620&w=1440",
      description: "The tallest giraffe reaching high to get some leaves.",
      keywords: [{ name: "giraffes" }, { name: "tall" }, { name: "safari" }],
    },
  ],
  Zebras: [
    {
      id: "1",
      name: "Zebra herd",
      image:
        "https://www.awf.org/sites/default/files/styles/vertical_image/public/2020-04/Website_SpeciesPage_Zebra03_01_Solutions.jpg?h=3c6d87fa&itok=cnqfh2go",
      description: "A herd of zebras running through the savanna.",
      keywords: [{ name: "zebras" }, { name: "herd" }, { name: "safari" }],
    },
    {
      id: "2",
      name: "Striped zebra",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/160928103855-south-africa-zebra.jpg?q=w_4410,h_3090,x_0,y_0,c_fill",
      description: "A close-up of a zebra showing its unique stripes.",
      keywords: [{ name: "zebras" }, { name: "stripes" }, { name: "safari" }],
    },
  ],
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>

);

const renderItem = ({ item }) => {
  // const [selectedId, setSelectedId] = useState();
  // const backgroundColor = item.id === selectedId ? "#222" : "#555";
  // const color = item.id === selectedId ? "white" : "black";
  return (
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={'#222'}
      textColor={'#ccc'}
    />
  );
};

const Lists = ({ lists }) => {
  let sortedLists = Object.keys(lists)
    .sort()
    .map((keyword) => {
      return (
        <SafeAreaView
          style={{
            backgroundColor: "#333",
            height: 100,
            width: "100%",
            alignItems: "start",
            padding: 20,
            marginBottom: 10
          }}
          key={keyword}
        >
          <FlatList
            data={lists[keyword]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </SafeAreaView>
      );
    });

  return sortedLists;
};

export default function SearchComponent({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
      }}
    >
      <View
        name="search-bar"
        style={{
          backgroundColor: "#222",
          height: 100,
          padding: 20,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#ddd" }}>
          You will see your speech dictation and keywords match up here
        </Text>
      </View>
      <Lists lists={DATA} />

      {/* <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
