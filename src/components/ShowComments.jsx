import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { showComments } from "../state/comments";

const ShowComments = ({ planId }) => {
  const { comments } = useSelector((store) => store.comments);
  console.log("ESTO ES COMMENTS", comments);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(showComments(planId));
  }, []);

  return (
    <View>
      {comments ? (
        comments.map((comment) => (
          <View key={comment.id}>
            <Text style={styles.paragTxt}>"{comment.comentario}"</Text>
          </View>
        ))
      ) : (
        <Text style={styles.paragTxt}>No hay comentarios</Text>
      )}
    </View>
  );
};

export default ShowComments;

const styles = StyleSheet.create({
  paragTxt: {
    fontFamily: "Poppins_300Light",
    fontSize: 13,
    color: "#23036A",
    marginLeft: 15,
  },
});
