import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  LogBox
} from "react-native";

//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";

//-------------Libraries Import--------------------------
import { AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-elements";

//------------Components Import-----------------------------
import Search from "../components/Search";
import CategoriesComponent from "../components/CategoriesComponent";
import SearchedPlans from "../components/SearchedPlans";

const SearchScreen = ({ navigation }) => {
  const { searchedPlans } = useSelector((store) => {
    return store.plan;
  });

  const initialState = {
    fromModal: false,
    fromSearch: false,
    query: "",
    afterFirstPrivate: false,
    afterFirstFree: false,
    private: false,
    free: false,
  };

  const [filter, setFilter] = React.useState(initialState);

  const [modalVisible, setModalVisible] = React.useState(false);

  const data = [
    "planDate",
    "planDateBefore",
    "planDateAfter",
    "address",
    "Min",
    "Max",
    "recommendation",
    "Private",
    "Free",
  ];

  const dispatch = useDispatch();

  const onSwitchPrivate = (e) => {
    let auxPrivate = !filter.private;
    setFilter({ ...filter, private: auxPrivate, afterFirstPrivate: true });
  };

  const onSwitchFree = () => {
    let auxFree = !filter.free;
    setFilter({ ...filter, free: auxFree, afterFirstFree: true });
  };

  const onEditMin = (e) => {
    const auxMin = e.nativeEvent.text;
    if (auxMin === "" || !Number(auxMin)) {
      setFilter({ ...filter, priceMin: false });
    } else {
      setFilter({ ...filter, priceMin: Number(auxMin) });
    }
  };

  const onEditMax = (e) => {
    const auxMax = e.nativeEvent.text;
    if (auxMax === "" || !Number(auxMax)) {
      setFilter({ ...filter, priceMax: false });
    } else {
      setFilter({ ...filter, priceMax: Number(auxMax) });
    }
  };

  React.useEffect(() => {
    dispatch(searchPlans(filter));
  }, [filter]);

  //Para ignorar el error insoportable ese
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Search
            navigation={navigation}
            setModal={() => {
              setModalVisible(true);
              setFilter({
                ...initialState,
                fromModal: true,
                fromSearch: false,
                query: "",
              });
            }}
            filter={filter}
          />

          {searchedPlans && searchedPlans.length !== 0 ? (
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
                  <Switch
                    value={filter.private}
                    onValueChange={onSwitchPrivate}
                  />
                </View>

                <View style={styles.switchStyle}>
                  <Text>{data[8]}</Text>
                  <Switch value={filter.free} onValueChange={onSwitchFree} />
                </View>

                <View style={styles.switchStyle}>
                  <Text>Precio</Text>

                  <View style={styles.inputStyle}>
                    <TextInput
                      style={{
                        borderBottomWidth: 0.5,
                        height: 25,
                        width: 60,
                        textAlign: "center",
                      }}
                      placeholder={data[4]}
                      onEndEditing={onEditMin}
                    />
                    <Text> - </Text>
                    <TextInput
                      style={{
                        borderBottomWidth: 0.5,
                        height: 25,
                        width: 60,
                        textAlign: "center",
                      }}
                      placeholder={data[5]}
                      onEndEditing={onEditMax}
                    />
                  </View>
                </View>

                <View>
                  <Text>{data[4]}</Text>

                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    ratingTextColor="black"
                    /* onFinishRating={} */
                  />
                </View>
              </View>
            </View>
          </Modal>
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
  categoriesCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding:20,
  },
  modalContent: {
    width: "75%",
    height: "80%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
  iconStyle: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 30,
    marginRight: 10,
  },
  switchStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 35,
  },
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    paddingTop: 15,
  },
});
