import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const Events = () => {
    return (
        <View style={styles.container}>
            <Text>Events Screen</Text>
        </View>
    )
}

export default Events;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });