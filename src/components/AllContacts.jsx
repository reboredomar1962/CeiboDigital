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
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../state/user";
import { addContact, addReduxContact, getFriend } from "../state/contacts";

import { Searchbar } from "react-native-paper";
import RenderContacts from "./RenderContacts";

const AllContacts = () => {
  const [search, setSearch] = React.useState("");
  const { allUsers, me } = useSelector((store) => store.user);
  const { contactsOnRedux, searchedContacts } = useSelector(
    (store) => store.contacts
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUsers());
    dispatch(addReduxContact(me.contacts.map((contact) => contact.id)));
  }, []);

  // React.useEffect(() => {
  //   dispatch(getFriend());
  // }, [contactsOnRedux.length]);

  const onChangeSearch = (query) => {
    console.log(query);
    setSearch(query);
    dispatch(query);
  };

  const onButtonPress = (id) => {
    dispatch(addContact(id));
    dispatch(addReduxContact(id));
    console.log("apreto el mas");
    //dispatch(getFriend());
  };

  const Item = ({ userInfo }) =>
    userInfo.id !== me.id ? (
      <View>
        <RenderContacts
          user={userInfo}
          bottonPress={onButtonPress}
          contacts={contactsOnRedux}
        />
      </View>
    ) : null;

  const renderItem = ({ item }) => <Item userInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar
          placeholder="Buscar contactos..."
          onChangeText={onChangeSearch}
          value={search}
          inputStyle={{ fontFamily: "Poppins_300Light", fontSize: 15 }}
          iconColor="#23036A"
          style={{
            backgroundColor: "#F0E8FC",
            width: 300,
            marginTop: 15,
            marginBottom: 15,
            height: 40,
            alignSelf: "center",
          }}
        />
      </View>
      <FlatList
        data={searchedContacts.length !== 0 ? searchedContacts : allUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AllContacts;
