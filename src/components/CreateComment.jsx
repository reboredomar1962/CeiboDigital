import * as React from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, Button } from "react-native";
import { Rating } from "react-native-elements";
import { createComment } from "../state/comments";

const CreateComment = ({ singlePlan }) => {
  const { id } = singlePlan;
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = () => {
    const commentObj = { planId: id, comentario: value };
    dispatch(createComment(commentObj));
  };

  const onChange = (text) => {
    setValue(text);
  };

  const clearScreen = () => {
    setValue("");
  };

  return (
    <View>
      <View>
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder={"Inserta un comentario"}
          onEndEditing={clearScreen}
          value={value}
          onChangeText={onChange}
        />
        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
          ratingTextColor="black"
          // onFinishRating={(score) => {
          //   onRatingSubmit(score);
          // }}
        />
      </View>
      <View>
        <Button title={"Enviar"} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateComment;
