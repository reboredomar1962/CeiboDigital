import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";


const MyAccount = ({ navigation }) => {

  const { me } = useSelector((store) => store.user);

  return (
    <>
      {me && Object.keys(me).length ? navigation.navigate('MyAccountLoggedIn') : navigation.navigate('LoginScreen')} 
    </>

  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    marginTop: 25,
  },
  textTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
  listContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
