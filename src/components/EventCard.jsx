import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from "react-native";
import plansReducer, { showPlans } from '../state/plan';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Title, Paragraph } from 'react-native-paper';


const EventCard = () => {

  const plans = useSelector(store => store.plan);
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(showPlans())
  }, [])

  const Item = ({id, img, name, description}) => (
    <View style={styles.cardContainer} >
        
            <Card style={styles.cardStyle} key={id}>
                <Card.Cover source={{uri: img[0]}} />
                <Card.Content style={{marginTop:5}}>
                    <Title style={styles.titleTxt}>{name}</Title>
                    <Paragraph style={styles.paragTxt} >{description}</Paragraph>
                </Card.Content>
            </Card>
        
      </View>
  );

  const renderItem = ({item}) => (
    <Item id={item.id} img={item.img} name={item.name} description={item.description} />
  );

  return(
  
    <SafeAreaView>
    <FlatList horizontal={true}
    data={plans}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    
    />
    </SafeAreaView>
)
  

 /*  return (
    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.cardContainer} >
        {
          plans.map(event => (
            <Card style={styles.cardStyle} key={event.id}>
                <Card.Cover source={{uri: event.img}} />
                <Card.Content style={{marginTop:5}}>
                    <Title style={styles.titleTxt}>{event.name}</Title>
                    <Paragraph style={styles.paragTxt} >{event.description}</Paragraph>
                </Card.Content>
            </Card>
          ))
        }
      </View>
    </ScrollView> 

  ) */



      };

export default EventCard;

const styles = StyleSheet.create({
  cardContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
  },
  cardStyle: {
      flex: 1,
      margin: 15,
      width: 300,
      
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
});