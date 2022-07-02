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


const AccountSelectScreen= ({navigation}) => {
    const farmer = { uri: "https://img.freepik.com/free-vector/cartoon-farmer-holding-pitchfork_29190-4422.jpg?w=2000" };

    const seller = {uri:"https://thumbs.dreamstime.com/b/cute-cartoon-vector-illustration-fruit-seller-women-professions-series-134800945.jpg"}
    return(
        <View style={styles.container} colors={["#72c2d9","#35a9ad","#03958b"]}>
            <View style={styles.wrapper}>
                <Text style={styles.appNameStyle}>I am </Text>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('FarmerLogin')}>
                    <View style={styles.logoContainer}>
                        <ImageBackground source={farmer} imageStyle={{ borderRadius: 500}} resizeMode="cover" style={styles.logo}>
                        </ImageBackground>
                    </View>
                    <Text style={styles.subText}>A farmer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.navigate('FarmerLogin')}>
                    <View style={styles.logoContainer}>
                        <ImageBackground source={seller} imageStyle={{ borderRadius: 500}} resizeMode="cover" style={styles.logo}>
                        </ImageBackground>
                    </View>
                    <Text style={styles.subText}>A seller</Text>
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
    // logoContainer:{
    //     marginTop:50,
    //     width:220,
    //     height:220,
    //     alignSelf:'center',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:'white',
    //     borderColor:'#6ab04c',
    //     borderWidth:5,
    //     borderRadius:300
    // },
    logo: {
        width:200,
        height:200,
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
        marginTop:50,
        fontFamily:"sans-serif-medium"
    },
    buttonContainer:{
        marginTop:50
    },
    subText:{
        marginTop:20,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        color:'#6ab04c',
        borderRadius:10,
        textAlign:'center',
        paddingTop:4,
        alignSelf:'center',
        fontSize:20
    }
});

export default AccountSelectScreen;