import React , {useState,useEffect} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'
import LinearGradient from 'react-native-linear-gradient';


const WelcomePageScreen = ({navigation}) => {
    const image = { uri: "https://media.istockphoto.com/vectors/landscape-of-rice-field-terraces-asian-rural-background-agriculture-vector-id1226970191?k=20&m=1226970191&s=612x612&w=0&h=60ddCH9qlOmTZe_Sqw7QSTYv3KK-dNUr7n5yBnCZjoE=" };

    const logo = {uri:"https://freedesignfile.com/upload/2018/04/Cartoon-farmer-with-tractor-vector.jpg"}
    return(
        <View style={styles.container} colors={["#72c2d9","#35a9ad","#03958b"]}>
            <View style={styles.wrapper}>
                <Text style={styles.appNameStyle}>ගොවි මිතුරා</Text>
                <View style={styles.logoContainer}>
                    <ImageBackground source={logo} imageStyle={{ borderRadius: 500}} resizeMode="cover" style={styles.logo}>
                    </ImageBackground>
                </View>
                <Text style={styles.details}>A Future for Agriculture with Tech</Text>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('FarmerLogin')}>
                    <Text style={styles.subText}>Get Started</Text>
                </TouchableOpacity>
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
    image: {
        width:'100%',
        height:300,
        position:'absolute',
        top:0,
        justifyContent: "center"
    },
    logoContainer:{
        marginTop:50,
        width:320,
        height:320,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderColor:'#6ab04c',
        borderWidth:5,
        borderRadius:300
    },
    logo: {
        width:300,
        height:300,
        alignSelf:"center",
        justifySelf: "center",
        borderRadius:'50%',
    },
    wrapper:{
        position:'absolute',
        top:0,
        width:'100%',
        bottom:0,
        backgroundColor:'white'
    },
    titleTextStyle:{
        color:"#6ab04c",
        fontSize:30,
        letterSpacing:15,
        fontWeight:'900',
        textAlign:'center',
        marginTop:50,
        fontFamily:"sans-serif-medium"
    },
    appNameStyle:{
        color:"#6ab04c",
        fontSize:30,
        letterSpacing:5,
        fontWeight:'900',
        textAlign:'center',
        marginTop:100,
        fontFamily:"sans-serif-medium"
    },
    subText:{
        marginTop:50,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ab04c',
        color:'white',
        borderRadius:10,
        textAlign:'center',
        paddingTop:4,
        alignSelf:'center',
        fontSize:20
    },
    details:{
        fontSize:15,
        color:'#6ab04c',
        textAlign:'center',
        marginTop:20
    }
});

export default WelcomePageScreen;