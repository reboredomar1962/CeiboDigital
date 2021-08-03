import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
  } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const NextEvents = () => {
    const { me } = useSelector((store) => store.user);

    return (
        <SafeAreaView>
            {me && me.id ?
            
            (
                <View>

                    {me.myPlans.map(plan=>(
                        <View>
                            <Text>{plan}</Text>
                        </View>
                    ))}
                </View>
            )

            :

            <Text>No estas logueado</Text>

            }
        </SafeAreaView>
    )
}

export default NextEvents;
