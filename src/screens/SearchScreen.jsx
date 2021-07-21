import  * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
//-------------Redux Import------------------------------
import { useSelector, useDispatch } from "react-redux";
import { showCategories } from '../state/categories';
//-------------Libraries Import--------------------------
import { Card, Title, Paragraph } from "react-native-paper";

//------------Components Import-----------------------------
import Search from '../components/Search';
import CategoriesComponent from '../components/CategoriesComponent';


const SearchScreen = () => {

    /* const categories = useSelector((store) => store.categories)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(showCategories());
        console.log('ACA ESTA CATEGORIES--------->', categories)
    }, []); */

    
    

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    
                    <Search />
                    <Text style={styles.textSubtitle}>Categorías</Text>
                    <CategoriesComponent />
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    textSubtitle: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
        color: '#23036A',
        paddingTop: 15,
    },
    /* titleTxt: {
        fontFamily: "Poppins_500Medium",
        fontSize: 15,
        color: "#23036A",
    },
    cardStyle: {
        flex: 1,
        margin: 15,
        width: 300,
    }, */
    
});

