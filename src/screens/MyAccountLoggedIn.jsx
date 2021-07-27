import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { Avatar } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import AccountInfo from "../components/AccountInfo";

const randomUser = {
  name: "Juan",
  lastName: "Perez",
  age: 31,
  img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300",
  email: "juan@gmail.com",
  password: "123",
  contacts: [],
  myPlans: [],
  categories: [],
  id: 1,
};

const MyAccountLoggedIn = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);

  console.log("myAccount", me);

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={{ position: "absolute" }}>
        <Rect x="0" y="0" width="100%" height="35%" fill="#23036A" />
      </Svg>

      <Avatar
        size={110}
        source={{ uri: randomUser.img }}
        avatarStyle={{ borderRadius: 10 }}
        containerStyle={styles.avatar}
      />

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
          {randomUser.name} {randomUser.lastName}
        </Text>
      </View>

      <View style={styles.container}>
        <AccountInfo />
      </View>
    </View>
  );
};

export default MyAccountLoggedIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    position: "absolute",
    transform: [{ translateY: 20 }],
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  textContainer: {
    position: "absolute",
    transform: [{ translateY: 140 }],
  },
});
