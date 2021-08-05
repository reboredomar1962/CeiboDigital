import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-elements";
import { createComment, showComments } from "../state/comments";

const CreateComment = () => {
  const { singlePlan } = useSelector((store) => store.plan);
  const [value, setValue] = React.useState("");
  const [rating, setRating] = React.useState(3);
  const { id } = singlePlan;

  const dispatch = useDispatch();
  const onSubmit = () => {
    const commentObj = { planId: id, comentario: value, valoracion: rating };
    dispatch(createComment(commentObj));
    console.log("aca se creo el comment");
    // dispatch(showComments(id));
    // console.log("aca muestro de nuevo el showComments");
    setValue("");
  };

  const onChange = (text) => {
    setValue(text);
  };

  const onRatingSubmit = (score) => {
    setRating(score);
  };

  return (
    <View style={{ backgroundColor: "#fff", width: "100%" }}>
      <Text style={styles.titleTxt}>Ya fuiste?</Text>

      <View style={styles.itemsStyle}>
        <AntDesign name="edit" size={24} color="#985EFF" />
        <TextInput
          style={styles.paragTxt}
          multiline={true}
          numberOfLines={3}
          placeholder={"Inserta un comentario"}
          value={value}
          onChangeText={onChange}
        />
      </View>

      <View style={styles.itemsStyle}>
        <AntDesign name="smileo" size={24} color="#985EFF" />
        {/* <Rating
          type="star"
          style={{ marginLeft: 15 }}
          ratingCount={5}
          imageSize={20}
          ratingTextColor="black"
          startingValue={1}
          onFinishRating={(score) => {
            onRatingSubmit(score);
          }}
        /> */}
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.btnStyle} onPress={onSubmit}>
          <Text style={styles.btnTxt}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateComment;

const styles = StyleSheet.create({
  itemsStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    width: "100%",
  },
  titleTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    color: "#23036A",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: "#23036A",
    marginLeft: 15,
  },
  btnStyle: {
    backgroundColor: "#23036A",
    padding: 7,
    borderRadius: 20,
    width: 150,
    marginTop: 20,
    marginBottom: 10,
  },
  btnTxt: {
    fontFamily: "Poppins_300Light",
    color: "#fff",
    textAlign: "center",
  },
});
