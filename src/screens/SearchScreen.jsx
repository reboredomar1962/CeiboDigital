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
  LogBox,
} from "react-native";

//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { searchPlans } from "../state/plan";

//-------------Libraries Import--------------------------
import { AntDesign } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { Rating } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    afterFirstPublic: false,
    afterFirstPaid: false,
    private: false,
    free: false,
    public: false,
    paid: false,
  };
  //Date logic with local state
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate.toString());
    let testDate = new Date();
    console.log(testDate < currentDate);
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setFilter({
      ...filter,
      planDate: currentDate,
    });
  };

  const showDate = () => {
    setShow(true);
  };

  // Filter and modal logic managed in local states
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

  const onSwitchPrivate = () => {
    let auxPrivate = !filter.private;
    if (auxPrivate && filter.public)
      setFilter({
        ...filter,
        private: auxPrivate,
        afterFirstPrivate: true,
        public: false,
        afterFirstPublic: false,
      });
    else if (!auxPrivate && !filter.public)
      setFilter({ ...filter, private: auxPrivate, afterFirstPrivate: false });
    else setFilter({ ...filter, private: auxPrivate, afterFirstPrivate: true });
  };

  const onSwitchPublic = () => {
    let auxPublic = !filter.public;
    if (auxPublic && filter.private)
      setFilter({
        ...filter,
        public: auxPublic,
        afterFirstPublic: true,
        private: false,
        afterFirstPrivate: false,
      });
    else if (!auxPublic && !filter.private)
      setFilter({ ...filter, public: auxPublic, afterFirstPublic: false });
    else setFilter({ ...filter, public: auxPublic, afterFirstPublic: true });
  };

  const onSwitchFree = () => {
    let auxFree = !filter.free;
    if (auxFree && filter.paid)
      setFilter({
        ...filter,
        free: auxFree,
        afterFirstFree: true,
        paid: false,
        afterFirstPaid: false,
      });
    else if (!auxFree && !filter.paid)
      setFilter({ ...filter, free: auxFree, afterFirstFree: false });
    else setFilter({ ...filter, free: auxFree, afterFirstFree: true });
  };

  const onSwitchPaid = () => {
    let auxPaid = !filter.paid;
    if (auxPaid && filter.free)
      setFilter({
        ...filter,
        paid: auxPaid,
        afterFirstPaid: true,
        free: false,
        afterFirstFree: false,
      });
    else if (!auxPaid && !filter.free)
      setFilter({ ...filter, paid: auxPaid, afterFirstPaid: false });
    else setFilter({ ...filter, paid: auxPaid, afterFirstPaid: true });
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

  const onRatingSubmit = (score) => {
    setFilter({
      ...filter,
      recommendation: Number(score),
      afterFirstRecommendation: true,
    });
  };

  React.useEffect(() => {
    dispatch(searchPlans(filter));
  }, [filter]);

  //Para ignorar el error insoportable ese
  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

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
                    onPress={() => {
                      filterLen = Object.keys(filter).length;
                      iniStateLen = Object.keys(initialState).length;
                      if (
                        !filter.afterFirstPrivate &&
                        !filter.afterFirstFree &&
                        !filter.afterFirstPublic &&
                        !filter.afterFirstPaid &&
                        filterLen === iniStateLen
                      ) {
                        setFilter({
                          ...initialState,
                          fromModal: false,
                          fromSearch: false,
                          query: "",
                        });
                      }

                      setModalVisible(!modalVisible);
                    }}
                  >
                    <AntDesign name="close" size={24} color="#985EFF" />
                  </TouchableOpacity>
                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Privado</Text>
                  <Switch
                    color="#985EFF"
                    value={filter.private}
                    onValueChange={onSwitchPrivate}
                  />
                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Publico</Text>
                  <Switch
                    color="#985EFF"
                    value={filter.public}
                    onValueChange={onSwitchPublic}
                  />
                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Gratis</Text>
                  <Switch color="#985EFF" value={filter.free} onValueChange={onSwitchFree} />
                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Pago</Text>
                  <Switch color="#985EFF" value={filter.paid} onValueChange={onSwitchPaid} />
                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Precio</Text>

                  <View style={styles.inputStyle}>
                    <TextInput
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#23036A",
                        borderBottomColor:"#985EFF",
                        borderBottomWidth: 0.5,
                        height: 25,
                        width: 60,
                        textAlign: "center",
                      }}
                      placeholder={data[4]}
                      onEndEditing={onEditMin}
                    />
                    <Text style={styles.categoryTxt}> - </Text>
                    <TextInput
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#23036A",
                        borderBottomColor:"#985EFF",
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
                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Rating</Text>

                  <Rating
                    style={{marginRight:10}}
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    ratingTextColor="black"
                    startingValue={1}
                    onFinishRating={(score) => {
                      onRatingSubmit(score);
                    }}
                  />

                </View>

                <View style={styles.switchStyle}>
                  <Text style={styles.categoryTxt}>Fecha</Text>
                  <TouchableOpacity style={{marginRight:10}} onPress={showDate}>
                    <AntDesign name="calendar" size={24} color="#985EFF" />
                  </TouchableOpacity>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={"date"}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
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
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modalContent: {
    width: "70%",
    height: "84%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  iconStyle: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 30,
    marginRight: 20,
    marginTop:5,
  },
  switchStyle: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 45,
    marginBottom: 5,
  },
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginRight:10,
  },
  categoryTxt: {
    fontFamily: "Poppins_500Medium",
    color: "#23036A",
    fontSize: 14,
    marginLeft: 10,
  },
  textSubtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    paddingTop: 15,
  },
});
