import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { showCategories } from "../state/categories";
//-------------Libraries Import--------------------------
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

//------------Components Import-----------------------------
import Search from "../components/Search";
import CategoriesComponent from "../components/CategoriesComponent";
import SearchedPlans from "../components/SearchedPlans";
import { TextInput } from "react-native-gesture-handler";

const SearchScreen = ({ navigation }) => {
  const { searchedPlans } = useSelector((store) => {
    //console.log("estos son los store searchedPlans", store.plan.searchedPlans);
    return store.plan;
  });

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Search
            navigation={navigation}
            setModal={() => setModalVisible(true)}
          />

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

          <Modal
            style={{ marginTop: 50 }}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            presentationStyle="overFullScreen"
          >
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  width: "75%",
                  height: "80%",
                  backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: 10,
                }}
              >
                <View>
                  {/* Maneja la X para salir*/}
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <AntDesign name="close" size={24} color="black" />
                  </Pressable>
                </View>
                <View>
                  <Text>Fecha</Text>
                </View>
                <View>
                  <Text>Precio</Text>
                  <TextInput placeholder="Mínimo" onEndEditing={() => {}} />
                  <TextInput placeholder="Máximo" onEndEditing={() => {}} />
                </View>

                <View>
                  <Text>Recomendación</Text>
                </View>
                <View>
                  <Text>Privado?</Text>
                </View>
                <View>
                  <Text>Gratis?</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// planDate,
// planDateBefore,
// planDateAfter,
// address,
// priceMin,
// priceMax,
// recommendation,
// private,
// free,

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
