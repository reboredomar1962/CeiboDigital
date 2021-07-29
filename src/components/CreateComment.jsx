import * as React from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, Button } from "react-native";
import { Rating } from "react-native-elements";
import { createComment } from "../state/comments";

const CreateComment = ({ singlePlan }) => {

  const { id } = singlePlan;
  const [value, setValue] = React.useState("");
  const [rating, setRating] = React.useState(3);


  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log('ESPERO QUE LLEGUEMOS AKI PLIS')
    const commentObj = { planId: id, comentario: value, valoracion: rating };
    dispatch(createComment(commentObj));
    setValue("");
  };

  const onChange = (text) => {
    setValue(text);
  };

  const onRatingSubmit = (score) => {
    setRating(score)
  };

  return (
    <View>
      <View>
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder={"Inserta un comentario"}
          /* onEndEditing={clearScreen} */
          value={value}
          onChangeText={onChange}
        />
        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
          ratingTextColor="black"
           onFinishRating={(score) => {
             onRatingSubmit(score);
           }}
        />
      </View>
      <View>
        <Button title={"Enviar"} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default CreateComment;
