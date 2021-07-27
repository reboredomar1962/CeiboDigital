import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Avatar } from 'react-native-elements';
import Svg, { Rect } from 'react-native-svg';
import { alignItems } from 'styled-system';



const MyAccount = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Svg height="100%" width="100%" style={{position: 'absolute'}}>
              <Rect x="0" y="0" width="100%" height="30%" fill="#23036A" />
            </Svg>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>¿Todavía no tenés tu cuenta?</Text>
            </View>


            <View style={styles.listContainer}>

            <View style={styles.btnContainer}>
            <Text style={{textAlign:'center', marginBottom:5, fontFamily: 'Poppins_500Medium', color:"#23036A"}}>Registrate para acceder</Text>

            <View style={styles.button}>
            <Button
            color="#23036A"
            title='Registrarse'
            onPress={() => navigation.navigate('RegisterScreen')}
            ></Button>
            </View>
            </View>
            
            <View style={styles.btnContainer}>

            <Text style={{textAlign:'center', marginBottom:5, fontFamily: 'Poppins_500Medium', color:"#23036A"}}>¿Ya tenés una cuenta?</Text>
            <View style={styles.button}>
            <Button
            color="#23036A"
            title='Iniciar sesión'
            onPress={() => navigation.navigate('LoginScreen')}
            ></Button>
            </View>

            </View>

            </View>

            <Button
            title='pantalla de usuario logueado'
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
    /* textTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
      marginTop: 15,
    }, */
    listContainer: {
      flex:1,
      justifyContent:'flex-start',
      position:'relative',
      transform:([{translateY:200}]),
    },
    textContainer: {
      position:'absolute',
      transform:([{translateY:60}]),
    },
    textTitle: {
      fontFamily: 'Poppins_300Light',
      fontSize: 18,
      color: '#fff',
    },
    btnContainer:{
      marginBottom:20,
    },
    button: {
      fontSize: 15,
      color: 'white',
      width: 200,
      borderRadius: 50,
      overflow: 'hidden'
    },
  });