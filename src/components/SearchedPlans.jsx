import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

//----------------LIBRARIES CONFIG--------------------------------
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-elements";
//-----------------REDUX CONFIG-----------------------------------
import { useSelector } from "react-redux";


const SearchedPlans = ({ navigation }) => {

  const { searchedPlans } = useSelector((store) => store.plan);
  const { me } = useSelector((store) => store.user);
  
  //FlatList config------------------------------------------------
  
  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SingleEvent", {
          id: item.id,
          eventName: item.name,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyle} key={item.id}>
          <Card.Cover source={{ uri: item.img[0] }} />
          <Card.Content style={{ marginTop: 5 }}>
            <Title style={styles.titleTxt}>{item.name}</Title>
            <Paragraph style={styles.paragTxt}>
              {item.description.substr(0, 40) + "..."}
            </Paragraph>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              {item.price ? (
                
                <Text style={styles.priceTxt}>${item.price}</Text>
                
              ) : (
                <Text style={styles.priceTxt}>Gratis</Text>
              )}

              <Rating
                count={5}
                startingValue={Math.round(item.recommendation)}
                imageSize={20}
                readonly
              />

              {me && me.id ? (
                <TouchableOpacity
                  style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
                  onPress={() => handlePress(item)}
                >
                  <AntDesign name="pluscircle" size={24} color="#23036A" />
                </TouchableOpacity>
              ) : null}
            </View>

          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  //FlatList Config termina aki --------------------------------------------

  return (
    <View style={styles.cardCont}>
      <View>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={searchedPlans}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default SearchedPlans;

const styles = StyleSheet.create({
  cardCont: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardStyle: {
    flex: 1,
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 20,
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: "#23036A",
  },
  priceTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#23036A",
    textAlign:'center',
  },
});
