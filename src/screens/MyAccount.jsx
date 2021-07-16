import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const MyAccount = () => {
    return (
        <View style={styles.container}>
            <Text>My Account Screen</Text>
        </View>
    )
}

export default MyAccount;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });