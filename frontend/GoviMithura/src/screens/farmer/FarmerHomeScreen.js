import React , {useState} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.button}><Button title="Mood Detection" onPress={()=>navigation.navigate('MoodDetection')}/></View>
            <View style={styles.button}><Button title="Predict Fat Level" onPress={()=>navigation.navigate('PredictFatLevel')}/></View>
            {/* <View><Button title="Login" style={styles.button}/></View> */}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
    },
    wrapper:{
        width:'80%',
        // borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingTop:'10%'
    },
    input:{
        color:'black',
        marginBottom:20,
        borderWidth:1,
        padding:10,
        borderColor:'#bbb',
    },
    button:{
        marginTop:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
    },
    link:{
        color:'blue'
    },
    text:{
        color:'black',
        textAlign:'center'
    }
})

export default HomeScreen;