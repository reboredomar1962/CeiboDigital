import * as React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

//----------------LIBRARIES CONFIG--------------------------------
import { Card, Title, Paragraph } from "react-native-paper";

//-----------------REDUX CONFIG-----------------------------------
import { useSelector } from "react-redux";


const SearchedPlans = ({ navigation }) => {

  const { searchedPlans } = useSelector((store) => store.plan);
  
  //FlatList config------------------------------------------------
  
  const Item = ({ id, img, name, description }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SingleEvent", {
          id: id,
          eventName: name,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyle} key={id}>
          <Card.Cover source={{ uri: img[0] }} />
          <Card.Content style={{ marginTop: 5 }}>
            <Title style={styles.titleTxt}>{name}</Title>
            <Paragraph style={styles.paragTxt}>{description}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      img={item.img}
      name={item.name}
      description={item.description}
    />
  );
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
});
