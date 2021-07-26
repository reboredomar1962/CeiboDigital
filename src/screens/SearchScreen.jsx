import * as React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { showCategories } from "../state/categories";
//-------------Libraries Import--------------------------
import { Card, Title, Paragraph } from "react-native-paper";

//------------Components Import-----------------------------
import Search from "../components/Search";
import CategoriesComponent from "../components/CategoriesComponent";
import SearchedPlans from "../components/SearchedPlans";

const SearchScreen = ({ navigation }) => {
  const { searchedPlans } = useSelector((store) => {
    return store.plan;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Search />

          {searchedPlans.length !== 0 ? (
            <View>
              <SearchedPlans navigation={navigation} />
            </View>
          ) : (
            <View style={styles.categoriesCont}>
              <Text style={styles.textSubtitle}>Categorías</Text>
              <CategoriesComponent />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    paddingTop: 15,
  },
  categoriesCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchPlanCont: {
    backgroundColor: "red",
  },
});
