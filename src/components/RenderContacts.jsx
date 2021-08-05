import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import { Avatar } from "react-native-elements";

const RenderContacts = ({ user, bottonPress }) => {
  return (
    <View style={styles.item}>
      {console.log("esto es el userInfo de RenderComponent", user)}
      <View>
        <Avatar
          size={50}
          rounded
          title={(user.name[0] + "" + user.lastName[0]).toUpperCase()}
          source={
            user.img
              ? {
                  uri: image,
                }
              : { uri: "no-image" }
          }
          //containerStyle={styles.avatar}
          placeholderStyle={{ backgroundColor: "#D4B5FA" }}
        ></Avatar>
      </View>
      <View>
        <Text style={styles.title}>{user.name + " " + user.lastName}</Text>
      </View>
      <View>
        <Button
          title="Añadir amigo"
          onPress={() => {
            console.log(user.id);
            bottonPress(user.id);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default RenderContacts;
