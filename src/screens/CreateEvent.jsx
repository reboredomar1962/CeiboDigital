import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const CreateEvent = () => {
    return (
        <View style={styles.container}>
            <Text>Create Event Screen</Text>
        </View>
    )
}

export default CreateEvent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });