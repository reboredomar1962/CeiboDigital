import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RenderContacts from "./RenderContacts";
import SurprisedSvg from "./SurprisedSvg";
import { getFriend, addReduxContact } from "../state/contacts";

const MyContacts = () => {
  const { me } = useSelector((store) => store.user);
  const { allFriends, contactsOnRedux } = useSelector(
    (store) => store.contacts
  );
  const dispatch = useDispatch();

  const Item = ({ userInfo }) => {
    //console.log("uesrInfo de MyContacts", userInfo);
    return userInfo.id !== me.id ? (
      <View>
        {console.log(
          "llego al render de adentro, este es el userInfo",
          userInfo
        )}
        <RenderContacts user={userInfo} contacts={contactsOnRedux} />
      </View>
    ) : null;
  };

  React.useEffect(() => {
    dispatch(getFriend());
    dispatch(addReduxContact(me.contacts.map((contact) => contact.id)));
  }, []);

  React.useEffect(() => {
    dispatch(getFriend());
  }, [contactsOnRedux.length]);

  const renderItem = ({ item }) => <Item userInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {contactsOnRedux.length !== 0 ? (
        <FlatList
          data={allFriends}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ opacity: 0.5, marginBottom: 20 }}>
            <SurprisedSvg />
          </View>

          <View style={{ width: "75%" }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 18,
                color: "#23036A",
                textAlign: "center",
              }}
            >
              Aún no tienes ningún contacto.
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MyContacts;
