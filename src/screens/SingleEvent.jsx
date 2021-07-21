import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

const SingleEvent = () => {
return(
    <View style={styles.container}>
      <Text>Single Event Screen</Text>
    </View>
)
}
export default SingleEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});