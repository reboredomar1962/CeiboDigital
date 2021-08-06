import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import HeheSvg from './HeheSvg';
import { useSelector, useDispatch } from "react-redux";




const MyEventCard = () => {
    const { me } = useSelector((store) => store.user);

    return(
        <View>
            {me && me.id ?
            
                
                    me.myPlans.length === 0 ?
                    
                    <View style={{opacity:0.5, alignItems:'center', justifyContent:'center', width:200, height:200}}>
                    <HeheSvg />
                    <View style={{width:'75%'}}>
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 15, color: "#23036A", textAlign:'center'}}>
                            Aún no has elegido ningún evento.
                        </Text>
                    </View>
                    </View>
                    
                    :

                     

                    

                    <View style={styles.cardContainer} >
                    { me.myPlans.map(plan => (
                        <Card style={styles.cardStyle} key={plan.id}>
                            <Card.Cover source={{uri: plan.img[0] }} />
                            <Card.Content style={{marginTop:5,}}>
                                <Title style={styles.titleTxt}>{plan.name}</Title>
                                <Paragraph style={styles.paragTxt} >{plan.description}</Paragraph>
                            </Card.Content>
                        </Card>
                    ))}
                    </View>
                    

                    

            :

                    
            
                (
                    <View style={{opacity:0.5, alignItems:'center', justifyContent:'center', width:200, height:200}}>
                    <HeheSvg />
                    <View style={{width:'75%'}}>
                        <Text style={{fontFamily: "Poppins_500Medium", fontSize: 15, color: "#23036A", textAlign:'center'}}>
                            Debes iniciar sesión para agregar eventos.
                        </Text>
                    </View>
                    </View>
                )
                
            }
        </View>

    )
};



export default MyEventCard;

const styles = StyleSheet.create({
    cardContainer: {
       /*  flexDirection: "row", */
        justifyContent: "center",
        alignItems: "center",
        /* marginLeft: 10,
        marginRight: 10,
        marginBottom:20 */
      },
    titleTxt: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 15,
      color: '#23036A',
    },
    paragTxt: {
        fontFamily: 'Poppins_300Light',
        fontSize: 12,
        color: '#23036A',
      },
      cardStyle: {
        marginTop: 20,
        marginLeft: 20,
        width: 300,
      },
    

      imgContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:95,
        height:120,
        borderRadius:10,
        borderWidth:1.5,
        borderColor:"#fff",
        borderStyle:'dashed',
    
      },
  });

