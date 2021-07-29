import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TextInput, Button, Text } from "react-native";
import { showComments } from "../state/comments";

const ShowComments = ({planId}) => {
    const {comments} = useSelector(store=>store.comments)
    console.log('ESTO ES COMMENTS',comments)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(showComments(planId))
    }, [])

    return (
        <View>
            {comments ?
        comments.map(comment => (
            <View>
                <Text>
                    {comment.comentario}
                </Text>
            </View>
            
        )) 
        :
        <Text>
            No hay comentarios
        </Text>   
        }
        </View>
    )
}

export default ShowComments;
