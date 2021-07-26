import * as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

//redux
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";
import { showPlans } from "../state/plan";



const Search = ({navigation, setModal}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(showPlans());
  // }, []);

  React.useEffect(() => {
    console.log("actualiza el search query", searchQuery);
    dispatch(searchPlans(searchQuery));
  }, [searchQuery]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
    <Searchbar
      placeholder="Buscar eventos..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={{ fontFamily: "Poppins_300Light", fontSize: 15 }}
      iconColor="#23036A"
      style={{
        backgroundColor: "#F0E8FC",
        width: 260,
        marginTop: 15,
        height: 40,
        alignSelf: "center",
      }}
    />
    <TouchableOpacity
    style={styles.icon}
    /* onPress={() => navigation.openDrawer()} */
    onPress={setModal}
    > 
      <AntDesign name="filter" size={24} color="#23036A" />
    </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon:{
    marginLeft:10,
    marginTop:15,
  }
});