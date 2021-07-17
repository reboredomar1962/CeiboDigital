import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';


const MyAccount = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle} >Mi Perfil</Text>
            <Avatar
                size={80}
                source={{uri:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'}}
                avatarStyle={{borderRadius: 10}}
            />
        </View>
    )
}

export default MyAccount;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    textTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      textAlign: 'center',
      color: '#23036A',
      paddingTop: 30,
      marginBottom: 10,
    },
  });