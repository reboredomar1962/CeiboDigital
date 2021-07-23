import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Svg, { Rect } from 'react-native-svg';
import RegisterForm from '../components/RegisterForm';


const RegisterScreen = () => {
    return (
      <SafeAreaView>
        <ScrollView>

        <View style={styles.container}>

          <Svg height="100%" width="100%" style={{position: 'absolute'}}>
              <Rect x="0" y="0" width="100%" height="30%" fill="#23036A" />
          </Svg>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Creá tu cuenta</Text>
          </View>

          <View style={{position:'relative', transform:([{translateY:200}])}}>
          <RegisterForm />
          </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      height:550,
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
    formContainer: {
      position:'absolute',
      transform:([{translateY:60}]),
    },
  });
