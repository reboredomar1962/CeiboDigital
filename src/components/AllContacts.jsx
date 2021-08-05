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
import { addContact } from "../state/contacts";

import { Searchbar } from "react-native-paper";
import RenderContacts from "./RenderContacts";

const AllContacts = () => {
  const [search, setSearch] = React.useState("");
  const { allUsers } = useSelector((store) => store.user);
  const { me } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const onChangeSearch = (query) => {
    console.log(query);
    setSearch(query);
  };

  const onButtonPress = (id) => {
    // console.log("aca llego un button press");
    // console.log("este es el id", id);
    dispatch(addContact(id));
  };

  const Item = ({ userInfo }) =>
    userInfo.id !== me.id ? (
      <View>
        <RenderContacts user={userInfo} bottonPress={onButtonPress} />
      </View>
    ) : null;

  const renderItem = ({ item }) => <Item userInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Buscar contactos..."
        onChangeText={onChangeSearch}
        value={search}
        inputStyle={{ fontFamily: "Poppins_300Light", fontSize: 15 }}
        iconColor="#23036A"
        style={{
          backgroundColor: "#F0E8FC",
          width: 300,
          marginTop: -15,
          marginBottom: 15,
          height: 40,
          alignSelf: "center",
        }}
      />
      <FlatList
        data={allUsers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default AllContacts;

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// export default function App() {
//   const renderItem = ({ item }) => <Item title={item.title} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//});
