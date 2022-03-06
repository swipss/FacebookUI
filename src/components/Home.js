import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import StoryList from "./StoryList";
import Post from "./Post";

export default function Home({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/facebook.png")}
          style={{ height: 25, justifyContent: "flex-start" }}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <Ionicons
            name="search"
            size={25}
            color="black"
            style={styles.headerIcon}
          />
          <FontAwesome5
            name="facebook-messenger"
            size={25}
            color="black"
            style={[styles.headerIcon, { marginHorizontal: 15 }]}
          />
        </View>
      </SafeAreaView>
      <View style={styles.writeContainer}>
        <View style={styles.leftWriteContainer}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>
            What's on your mind?
          </Text>
        </View>
        <MaterialIcons name="photo-library" size={24} color="green" />
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.action}>
          <MaterialIcons name="movie" size={24} color="crimson" />
          <Text style={{ marginLeft: 5 }}>Reel</Text>
        </View>
        <View style={styles.action}>
          <MaterialIcons name="camera-enhance" size={24} color="purple" />
          <Text style={{ marginLeft: 5 }}>Room</Text>
        </View>
        <View style={styles.action}>
          <MaterialIcons name="groups" size={24} color="blue" />
          <Text style={{ marginLeft: 5 }}>Group</Text>
        </View>
        <View style={styles.action}>
          <MaterialIcons name="photo-camera-front" size={24} color="crimson" />
          <Text style={{ marginLeft: 5 }}>Live</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "lightgrey", height: 10 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "blue",
            borderBottomColor: "blue",
          }}
        >
          Stories
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Reels</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Rooms</Text>
      </View>
      <View style={{ marginLeft: 5, padding: 5 }}>
        <StoryList />
      </View>
      <View style={{ backgroundColor: "lightgrey", height: 10 }} />
      <Post
        username={"Sten Vassiljev"}
        picture={"profile"}
        time={"6h"}
        text={"Thank you for the birthday wishes!"}
        likes={84}
        comments={3}
      />
      <Post
        username={"John Smith"}
        picture={"profile"}
        time={"6h"}
        text={"I am going on a vacation today."}
        likes={8}
        comments={3}
      />
      <Post
        username={"Sten Vassiljev"}
        picture={"profile"}
        time={"6h"}
        text={"Thank you for the birthday wishes!"}
        likes={84}
        comments={3}
      />
      <Post
        username={"Sten Vassiljev"}
        picture={"profile"}
        time={"6h"}
        text={"Thank you for the birthday wishes!"}
        likes={84}
        comments={3}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 20,
  },
  writeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    marginTop: 20,
    borderTopColor: "lightgrey",
  },
  leftWriteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
    paddingVertical: 10,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
