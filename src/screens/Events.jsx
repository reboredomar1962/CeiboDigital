import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Tab } from 'react-native-elements';

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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });