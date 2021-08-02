import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "react-native-elements";
import Svg, { Rect } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { logoutUser } from "../state/user";

const MyAccountLoggedIn = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  console.log("myAccount", me);

  return (
    <View style={styles.container}>
      <Svg height={180} width="100%">
        <Rect x="0" y="0" width="100%" height={180} fill="#23036A" />
      </Svg>

      <Avatar
        size={110}
        rounded
        title={(me.name[0] + me.lastName[0]).toUpperCase()}
        avatarStyle={{ borderRadius: 10 }}
        containerStyle={styles.avatar}
      >
        <Avatar.Accessory name="pencil-alt" type="font-awesome-5" size={20} />
      </Avatar>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
          {me.name} {me.lastName}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.itemsStyle}>
          <MaterialIcons name="alternate-email" size={24} color="#985EFF" />
          <Text style={styles.paragTxt}>{me.email}</Text>
        </View>

        <View style={styles.itemsStyle}>
          <MaterialCommunityIcons
            name="calendar-heart"
            size={24}
            color="#985EFF"
          />
          {me.myPlans.length ? (
            me.myPlans.map((plan) => (
              <Text key={plan.id} style={styles.paragTxt}>
                {plan}
              </Text>
            ))
          ) : (
            <Text style={styles.paragTxt}>No hay planes guardados</Text>
          )}
        </View>

        <View style={styles.itemsStyle}>
          <AntDesign name="contacts" size={24} color="#985EFF" />
          {me.contacts.length ? (
            me.contacts.map((contact) => (
              <Text style={styles.paragTxt}>{contact}</Text>
            ))
          ) : (
            <Text style={styles.paragTxt}>No hay contactos</Text>
          )}
        </View>

        <View style={styles.itemsStyle}>
          <Ionicons name="list-outline" size={24} color="#985EFF" />
          {me.categories.length ? (
            me.categories.map((category) => (
              <Text style={styles.paragTxt}>{category}</Text>
            ))
          ) : (
            <Text style={styles.paragTxt}>No hay categorias guardadas</Text>
          )}
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => dispatch(logoutUser())}
          >
            <Text style={styles.btnTxt}>Cerrar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyAccountLoggedIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  avatar: {
    position: "absolute",
    backgroundColor: "#D4B5FA",
    transform: [{ translateY: 15 }],
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  textContainer: {
    position: "absolute",
    transform: [{ translateY: 138 }],
  },
  btnStyle: {
    backgroundColor: "#23036A",
    padding: 7,
    borderRadius: 20,
    width: 150,
    marginTop: 20,
    marginBottom: 10,
  },
  btnTxt: {
    fontFamily: "Poppins_300Light",
    color: "#fff",
    textAlign: "center",
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: "#23036A",
    marginLeft: 15,
  },
  infoContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  itemsStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    marginBottom: 10,
  },
});
