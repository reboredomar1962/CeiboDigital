import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from 'react-native-elements';
import Svg, { Rect } from 'react-native-svg';

const randomUser = {
  image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=300',
  nombre: 'Juan Perez',
  edad: 30,
  ciudad: 'Buenos Aires',
  pais: 'Argentina',
}

const MyAccount = () => {
    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%" style={{position: 'absolute'}}>
              <Rect x="0" y="0" width="100%" height="35%" fill="#23036A" />
            </Svg>
            
            <Avatar
                size={110}
                source={{uri: randomUser.image}}
                avatarStyle={{borderRadius: 10}}
                containerStyle={styles.avatar}
            />
            <Text style={styles.textTitle}>{randomUser.nombre}</Text>
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
    avatar: {
      marginTop: 45,
    },
    textTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
      marginTop: 15,
    },
  });