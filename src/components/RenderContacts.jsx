import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const RenderContacts = ({ user, bottonPress, bottonPressMinus, contacts }) => {
  return (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Avatar
          size={35}
          rounded
          title={(user.name[0] + "" + user.lastName[0]).toUpperCase()}
          source={
            user.img
              ? {
                  uri: image,
                }
              : { uri: "no-image" }
          }
          placeholderStyle={{ backgroundColor: "#23036A" }}
        ></Avatar>

        <View style={{ marginLeft: 10 }}>
          <Text style={styles.textTitle}>
            {user.name + " " + user.lastName}
          </Text>
        </View>
      </View>

      <View>
        {!contacts.includes(user.id) ? (
          <TouchableOpacity
            onPress={() => {
              bottonPress(user.id);
            }}
          >
            <AntDesign name="pluscircleo" size={20} color="#23036A" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              bottonPressMinus(user.id);
            }}
          >
            <AntDesign name="minuscircleo" size={20} color="#23036A" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F2E7FE",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#23036A",
  },
});

export default RenderContacts;
