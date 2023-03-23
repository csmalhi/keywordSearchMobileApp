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
  Image
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
    style={[styles.item]}
  >
    <Image style={[styles.image]} src={item.image}></Image>
    <View style={[styles.info]}>
      <Text style={[styles.title]}>{item.name}</Text>
      {/* <Text style={[styles.description]}>{item.description}</Text> */}
      <Text style={[styles.keywords]}>{item.keywords.map(keyword => keyword.name).join(' ')}</Text>
    </View>
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
      backgroundColor={'#fff'}
    />
  );
};

const Lists = ({ lists }) => {
  let sortedLists = Object.keys(lists)
    .sort()
    .map((keyword) => {
      return (
        <SafeAreaView
          style={[styles.listsContainer]}
          key={keyword}
        >
          <Text style={[styles.keywordTitle]}>{keyword}</Text>
          <FlatList
            data={lists[keyword]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            width={'100%'}
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
      style={[styles.searchContainer]}
    >
      <View
        style={[styles.search]}
      >
        <Text style={[styles.searchText]}>
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
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#eee',
    borderRadius: 10,
    width: 100,
    shadowOpacity: .15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Fredoka'
  },
  keywords: {
    fontSize: 8,
    fontWeight: '300',
    color: '#444'
  },
  description: {
    fontSize: 10,
    fontWeight: '300'
  },
  keywordTitle: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Fredoka'
  },
  search: {
    backgroundColor: "#111",
    height: 70,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  listsContainer: {
    height: 120,
    width: "100%",
    alignItems: "start",
    padding: 5,
    marginBottom: 10
  },
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchText: {
    color: '#eee',
    fontFamily: 'Inconsolata'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  info: {
    padding: 5
  }
});
