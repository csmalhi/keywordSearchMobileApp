import { Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
      if (route.params?.post) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
      }
    }, [route.params?.post]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Create post"
          onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
}