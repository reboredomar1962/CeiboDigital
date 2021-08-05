import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
  } from "react-native";
import { useSelector } from "react-redux";

import SvgComponent from './SvgComponent';
import ConfusedSvg from './ConfusedSvg';

const PastEvents = ({ navigation }) => {
  const { me } = useSelector((store) => store.user);

  React.useEffect(()=>{
    let mounted = true

    if(mounted){
      console.log('Esto se actualiza?', me.myPlans)
    }
    else return mounted = false
  }, [me.myPlans])

    
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
                {me && me.id ? (
                    me.myPlans.length === 0 ? (
                        <View style={{width:'100%', height:'100%', backgroundColor:'#fff', alignItems:'center',
                        justifyContent:'center'}}>
                            <View style={{opacity:0.5, marginBottom:20}}>
                            <ConfusedSvg />
                            </View>

                            <View style={{width:'75%'}}>
                                <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, color: "#23036A", textAlign:'center'}}>
                                    Aún no has asistido a ningún evento.
                                </Text>
                            </View>
                        </View>
                    ) : (
                        console.log('Hay que ver como hacemos aca esto todavia')
                    )
                )
            :
            (
                <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ opacity: 0.5, marginBottom: 20 }}>
              <ConfusedSvg />
            </View>

            <View style={{ width: "75%" }}>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 18,
                  color: "#23036A",
                  textAlign: "center",
                }}
              >
                Dije que tienes que iniciar sesión para acceder.
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#23036A",
              padding: 7,
              borderRadius: 20,
              width: 180,
              marginTop: 15,
            }}
            onPress={()=> navigation.navigate('LoginScreen')}
          >
            <Text
              style={{
                fontFamily: "Poppins_300Light",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Ir a iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>

          </View>
            )
            }
            </View>

        </SafeAreaView>
    )
}

export default PastEvents;

{/* <View style={{width:'100%', height:'100%', backgroundColor:'#fff', alignItems:'center',
        justifyContent:'center'}}>
                <View style={{opacity:0.5, marginBottom:20}}>
                <ConfusedSvg />
                </View>

                <View style={{width:'75%'}}>
                    <Text style={{fontFamily: "Poppins_500Medium", fontSize: 18, color: "#23036A", textAlign:'center'}}>
                        Aún no has asistido a ningún evento.
                    </Text>
                </View>
            </View> */}
