import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";
import RenderContacts from "./RenderContacts";

const MyContacts = () => {
  const { me } = useSelector((store) => store.user);

  const Item = ({ userInfo }) => {
    console.log("uesrInfo de MyContacts", userInfo);
    return userInfo.id !== me.id ? (
      <View>
        {console.log("llego al render de adentro")}
        <RenderContacts user={userInfo} />
      </View>
    ) : null;
  };

  const renderItem = ({ item }) => <Item userInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {me.contacts.length !== 0 ? (
        <FlatList
          data={me.contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay contactos agregados</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default MyContacts;
