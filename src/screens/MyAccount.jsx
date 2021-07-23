import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Avatar } from 'react-native-elements';
import Svg, { Rect } from 'react-native-svg';
import { alignItems } from 'styled-system';
import Login from './LoginFacebook';


const MyAccount = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Svg height="100%" width="100%" style={{position: 'absolute'}}>
              <Rect x="0" y="0" width="100%" height="35%" fill="#23036A" />
            </Svg>

            <Login/>

            <Button
            title='Registrarse'
            onPress={() => navigation.navigate('RegisterScreen')}
            ></Button>

            <Button
            title='Iniciar sesión'
            onPress={() => navigation.navigate('LoginScreen')}
            ></Button>

            <Button
            title='Logged In'
            onPress={() => navigation.navigate('MyAccountLoggedIn')}
            ></Button>

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
      marginTop: 25,
    },
    textTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
      marginTop: 15,
    },
    listContainer: {
      flex:1,
      justifyContent:'flex-start',
      
    },
  });