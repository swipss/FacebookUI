import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Post({
  username,
  picture,
  time,
  text,
  likes,
  comments,
}) {
  return (
    <>
      <View style={{ padding: 10 }}>
        <View style={styles.userContainer}>
          <View style={styles.userContainerLeft}>
            <Image
              source={require("../../assets/images/beach.png")}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 5 }}>
              <Text style={{ fontWeight: "bold" }}>{username}</Text>
              <Text>{time}</Text>
            </View>
          </View>
          <View style={styles.userContainerRight}>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
            <AntDesign
              name="close"
              size={20}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>

        <Text style={{ marginTop: 5 }}>{text}</Text>
        <View style={styles.postInfoContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ borderRadius: 50, backgroundColor: "blue" }}>
              <AntDesign
                name="like1"
                size={12}
                color="white"
                style={{ padding: 4 }}
              />
            </View>
            <Text style={{ marginLeft: 5 }}>{likes}</Text>
          </View>

          <Text>{comments} comments</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.action}>
            <AntDesign name="like2" size={20} color="black" />
            <Text style={{ marginLeft: 5 }}>Like</Text>
          </View>
          <View style={styles.action}>
            <FontAwesome5 name="comment-alt" size={20} color="black" />
            <Text style={{ marginLeft: 5 }}>Comment</Text>
          </View>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="share-outline"
              size={20}
              color="black"
            />
            <Text style={{ marginLeft: 5 }}>Share</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "lightgrey", height: 10 }} />
    </>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userContainerLeft: {
    flexDirection: "row",
  },
  userContainerRight: {
    flexDirection: "row",
  },
  postInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopColor: "lightgrey",
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
});
