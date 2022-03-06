import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const stories = [
  {
    image: require("../../assets/images/explore.png"),
    title: "Explorer",
    id: 1,
  },
  {
    image: require("../../assets/images/gfuel.png"),
    title: "GFUEL",
    id: 2,
  },
  {
    image: require("../../assets/images/beach.png"),
    title: "Sten Vassiljev",
    id: 3,
  },
  {
    image: require("../../assets/images/car.png"),
    title: "John Doe",
    id: 4,
  },
];

export default function StoryList() {
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 5 }}>
            <Image
              source={item.image}
              style={{ width: 105, height: 200, borderRadius: 15 }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 5,
                left: 5,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>
            <Image
              source={item.image}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                position: "absolute",
                top: 5,
                left: 5,
                borderWidth: 4,
                borderColor: "blue",
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
