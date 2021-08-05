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
import SurprisedSvg from "./SurprisedSvg";

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
        <View style={{width:'100%', height:'100%', backgroundColor:'#fff', alignItems:'center',
        justifyContent:'center'}}>
            <View style={{opacity:0.5, marginBottom:20}}>
               <SurprisedSvg />
            </View>

            <View style={{width:'75%'}}>
                <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, color: "#23036A", textAlign:'center'}}>
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
    backgroundColor:'#fff',
  },
});

export default MyContacts;
