import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Modal,
  Pressable,
  TouchableOpacity,
  TextInput
} from "react-native";
//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { showCategories } from "../state/categories";
//-------------Libraries Import--------------------------
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Switch } from 'react-native-paper';

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

  const data = [
    'planDate',
    'planDateBefore',
    'planDateAfter',
    'address',
    'Min',
    'Max',
    'recommendation',
    'Private',
    'Free'
  ]

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            presentationStyle="overFullScreen"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.iconStyle}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <AntDesign name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>

                <View style={styles.switchStyle}>
                <Text>{data[7]}</Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>

                <View style={styles.switchStyle}>
                <Text>{data[8]}</Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>

                
                <View style={styles.switchStyle}>
                  <Text>Precio</Text>

                  <View style={styles.inputStyle}>
                  <TextInput style={{borderBottomWidth:0.5, height:25, width:60, textAlign:'center'}} placeholder={data[4]} onEndEditing={() => {}} />
                  <Text> - </Text>
                  <TextInput style={{borderBottomWidth:0.5, height:25, width:60, textAlign:'center'}} placeholder={data[5]} onEndEditing={() => {}} />
                  </View>

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
  modalContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  modalContent: {
    width: "75%",
    height: "80%",
    backgroundColor: "blue",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
  iconStyle:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:'100%',
    height:30,
    marginRight:10,
  },
  switchStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height: 35,
  },
  inputStyle:{
    flexDirection:'row',
    alignItems:'center',
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
